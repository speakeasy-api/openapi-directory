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
exports.RemoveSupportingWorkForGoalResponse = exports.RemoveSupportingWorkForGoalRequest = exports.RemoveSupportingWorkForGoal200ApplicationJson = exports.RemoveSupportingWorkForGoalRequestBody = exports.RemoveSupportingWorkForGoalQueryParams = exports.RemoveSupportingWorkForGoalPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RemoveSupportingWorkForGoalPathParams = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalPathParams, _super);
    function RemoveSupportingWorkForGoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], RemoveSupportingWorkForGoalPathParams.prototype, "goalGid", void 0);
    return RemoveSupportingWorkForGoalPathParams;
}(utils_1.SpeakeasyBase));
exports.RemoveSupportingWorkForGoalPathParams = RemoveSupportingWorkForGoalPathParams;
var RemoveSupportingWorkForGoalQueryParams = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalQueryParams, _super);
    function RemoveSupportingWorkForGoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveSupportingWorkForGoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveSupportingWorkForGoalQueryParams.prototype, "optPretty", void 0);
    return RemoveSupportingWorkForGoalQueryParams;
}(utils_1.SpeakeasyBase));
exports.RemoveSupportingWorkForGoalQueryParams = RemoveSupportingWorkForGoalQueryParams;
var RemoveSupportingWorkForGoalRequestBody = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalRequestBody, _super);
    function RemoveSupportingWorkForGoalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.GoalAddSupportingWorkRequest)
    ], RemoveSupportingWorkForGoalRequestBody.prototype, "data", void 0);
    return RemoveSupportingWorkForGoalRequestBody;
}(utils_1.SpeakeasyBase));
exports.RemoveSupportingWorkForGoalRequestBody = RemoveSupportingWorkForGoalRequestBody;
var RemoveSupportingWorkForGoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoal200ApplicationJson, _super);
    function RemoveSupportingWorkForGoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], RemoveSupportingWorkForGoal200ApplicationJson.prototype, "data", void 0);
    return RemoveSupportingWorkForGoal200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RemoveSupportingWorkForGoal200ApplicationJson = RemoveSupportingWorkForGoal200ApplicationJson;
var RemoveSupportingWorkForGoalRequest = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalRequest, _super);
    function RemoveSupportingWorkForGoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveSupportingWorkForGoalPathParams)
    ], RemoveSupportingWorkForGoalRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveSupportingWorkForGoalQueryParams)
    ], RemoveSupportingWorkForGoalRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveSupportingWorkForGoalRequestBody)
    ], RemoveSupportingWorkForGoalRequest.prototype, "request", void 0);
    return RemoveSupportingWorkForGoalRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveSupportingWorkForGoalRequest = RemoveSupportingWorkForGoalRequest;
var RemoveSupportingWorkForGoalResponse = /** @class */ (function (_super) {
    __extends(RemoveSupportingWorkForGoalResponse, _super);
    function RemoveSupportingWorkForGoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveSupportingWorkForGoalResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveSupportingWorkForGoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveSupportingWorkForGoalResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveSupportingWorkForGoal200ApplicationJson)
    ], RemoveSupportingWorkForGoalResponse.prototype, "removeSupportingWorkForGoal200ApplicationJSONObject", void 0);
    return RemoveSupportingWorkForGoalResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveSupportingWorkForGoalResponse = RemoveSupportingWorkForGoalResponse;
