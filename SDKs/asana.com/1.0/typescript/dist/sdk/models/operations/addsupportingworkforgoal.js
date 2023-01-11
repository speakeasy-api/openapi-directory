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
exports.AddSupportingWorkForGoalResponse = exports.AddSupportingWorkForGoalRequest = exports.AddSupportingWorkForGoal200ApplicationJson = exports.AddSupportingWorkForGoalRequestBody = exports.AddSupportingWorkForGoalQueryParams = exports.AddSupportingWorkForGoalPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddSupportingWorkForGoalPathParams = /** @class */ (function (_super) {
    __extends(AddSupportingWorkForGoalPathParams, _super);
    function AddSupportingWorkForGoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], AddSupportingWorkForGoalPathParams.prototype, "goalGid", void 0);
    return AddSupportingWorkForGoalPathParams;
}(utils_1.SpeakeasyBase));
exports.AddSupportingWorkForGoalPathParams = AddSupportingWorkForGoalPathParams;
var AddSupportingWorkForGoalQueryParams = /** @class */ (function (_super) {
    __extends(AddSupportingWorkForGoalQueryParams, _super);
    function AddSupportingWorkForGoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddSupportingWorkForGoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddSupportingWorkForGoalQueryParams.prototype, "optPretty", void 0);
    return AddSupportingWorkForGoalQueryParams;
}(utils_1.SpeakeasyBase));
exports.AddSupportingWorkForGoalQueryParams = AddSupportingWorkForGoalQueryParams;
var AddSupportingWorkForGoalRequestBody = /** @class */ (function (_super) {
    __extends(AddSupportingWorkForGoalRequestBody, _super);
    function AddSupportingWorkForGoalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalAddSupportingWorkRequest)
    ], AddSupportingWorkForGoalRequestBody.prototype, "data", void 0);
    return AddSupportingWorkForGoalRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddSupportingWorkForGoalRequestBody = AddSupportingWorkForGoalRequestBody;
var AddSupportingWorkForGoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddSupportingWorkForGoal200ApplicationJson, _super);
    function AddSupportingWorkForGoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], AddSupportingWorkForGoal200ApplicationJson.prototype, "data", void 0);
    return AddSupportingWorkForGoal200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddSupportingWorkForGoal200ApplicationJson = AddSupportingWorkForGoal200ApplicationJson;
var AddSupportingWorkForGoalRequest = /** @class */ (function (_super) {
    __extends(AddSupportingWorkForGoalRequest, _super);
    function AddSupportingWorkForGoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSupportingWorkForGoalPathParams)
    ], AddSupportingWorkForGoalRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSupportingWorkForGoalQueryParams)
    ], AddSupportingWorkForGoalRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddSupportingWorkForGoalRequestBody)
    ], AddSupportingWorkForGoalRequest.prototype, "request", void 0);
    return AddSupportingWorkForGoalRequest;
}(utils_1.SpeakeasyBase));
exports.AddSupportingWorkForGoalRequest = AddSupportingWorkForGoalRequest;
var AddSupportingWorkForGoalResponse = /** @class */ (function (_super) {
    __extends(AddSupportingWorkForGoalResponse, _super);
    function AddSupportingWorkForGoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddSupportingWorkForGoalResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddSupportingWorkForGoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddSupportingWorkForGoalResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSupportingWorkForGoal200ApplicationJson)
    ], AddSupportingWorkForGoalResponse.prototype, "addSupportingWorkForGoal200ApplicationJSONObject", void 0);
    return AddSupportingWorkForGoalResponse;
}(utils_1.SpeakeasyBase));
exports.AddSupportingWorkForGoalResponse = AddSupportingWorkForGoalResponse;
