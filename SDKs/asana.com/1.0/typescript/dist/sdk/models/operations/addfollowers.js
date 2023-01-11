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
exports.AddFollowersResponse = exports.AddFollowersRequest = exports.AddFollowers201ApplicationJson = exports.AddFollowersRequestBody = exports.AddFollowersQueryParams = exports.AddFollowersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddFollowersPathParams = /** @class */ (function (_super) {
    __extends(AddFollowersPathParams, _super);
    function AddFollowersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], AddFollowersPathParams.prototype, "goalGid", void 0);
    return AddFollowersPathParams;
}(utils_1.SpeakeasyBase));
exports.AddFollowersPathParams = AddFollowersPathParams;
var AddFollowersQueryParams = /** @class */ (function (_super) {
    __extends(AddFollowersQueryParams, _super);
    function AddFollowersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddFollowersQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddFollowersQueryParams.prototype, "optPretty", void 0);
    return AddFollowersQueryParams;
}(utils_1.SpeakeasyBase));
exports.AddFollowersQueryParams = AddFollowersQueryParams;
var AddFollowersRequestBody = /** @class */ (function (_super) {
    __extends(AddFollowersRequestBody, _super);
    function AddFollowersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskAddFollowersRequest)
    ], AddFollowersRequestBody.prototype, "data", void 0);
    return AddFollowersRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddFollowersRequestBody = AddFollowersRequestBody;
var AddFollowers201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddFollowers201ApplicationJson, _super);
    function AddFollowers201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalResponse)
    ], AddFollowers201ApplicationJson.prototype, "data", void 0);
    return AddFollowers201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddFollowers201ApplicationJson = AddFollowers201ApplicationJson;
var AddFollowersRequest = /** @class */ (function (_super) {
    __extends(AddFollowersRequest, _super);
    function AddFollowersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddFollowersPathParams)
    ], AddFollowersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddFollowersQueryParams)
    ], AddFollowersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddFollowersRequestBody)
    ], AddFollowersRequest.prototype, "request", void 0);
    return AddFollowersRequest;
}(utils_1.SpeakeasyBase));
exports.AddFollowersRequest = AddFollowersRequest;
var AddFollowersResponse = /** @class */ (function (_super) {
    __extends(AddFollowersResponse, _super);
    function AddFollowersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddFollowersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddFollowersResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddFollowersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddFollowers201ApplicationJson)
    ], AddFollowersResponse.prototype, "addFollowers201ApplicationJSONObject", void 0);
    return AddFollowersResponse;
}(utils_1.SpeakeasyBase));
exports.AddFollowersResponse = AddFollowersResponse;
