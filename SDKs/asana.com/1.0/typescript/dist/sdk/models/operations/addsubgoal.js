"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSubgoalResponse = exports.AddSubgoalRequest = exports.AddSubgoal200ApplicationJson = exports.AddSubgoalRequestBody = exports.AddSubgoalQueryParams = exports.AddSubgoalPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddSubgoalPathParams = /** @class */ (function (_super) {
    __extends(AddSubgoalPathParams, _super);
    function AddSubgoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], AddSubgoalPathParams.prototype, "goalGid", void 0);
    return AddSubgoalPathParams;
}(utils_1.SpeakeasyBase));
exports.AddSubgoalPathParams = AddSubgoalPathParams;
var AddSubgoalQueryParams = /** @class */ (function (_super) {
    __extends(AddSubgoalQueryParams, _super);
    function AddSubgoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddSubgoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddSubgoalQueryParams.prototype, "optPretty", void 0);
    return AddSubgoalQueryParams;
}(utils_1.SpeakeasyBase));
exports.AddSubgoalQueryParams = AddSubgoalQueryParams;
var AddSubgoalRequestBody = /** @class */ (function (_super) {
    __extends(AddSubgoalRequestBody, _super);
    function AddSubgoalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalAddSubgoalRequest)
    ], AddSubgoalRequestBody.prototype, "data", void 0);
    return AddSubgoalRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddSubgoalRequestBody = AddSubgoalRequestBody;
var AddSubgoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddSubgoal200ApplicationJson, _super);
    function AddSubgoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], AddSubgoal200ApplicationJson.prototype, "data", void 0);
    return AddSubgoal200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddSubgoal200ApplicationJson = AddSubgoal200ApplicationJson;
var AddSubgoalRequest = /** @class */ (function (_super) {
    __extends(AddSubgoalRequest, _super);
    function AddSubgoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSubgoalPathParams)
    ], AddSubgoalRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSubgoalQueryParams)
    ], AddSubgoalRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddSubgoalRequestBody)
    ], AddSubgoalRequest.prototype, "request", void 0);
    return AddSubgoalRequest;
}(utils_1.SpeakeasyBase));
exports.AddSubgoalRequest = AddSubgoalRequest;
var AddSubgoalResponse = /** @class */ (function (_super) {
    __extends(AddSubgoalResponse, _super);
    function AddSubgoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddSubgoalResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddSubgoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddSubgoalResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSubgoal200ApplicationJson)
    ], AddSubgoalResponse.prototype, "addSubgoal200ApplicationJSONObject", void 0);
    return AddSubgoalResponse;
}(utils_1.SpeakeasyBase));
exports.AddSubgoalResponse = AddSubgoalResponse;
