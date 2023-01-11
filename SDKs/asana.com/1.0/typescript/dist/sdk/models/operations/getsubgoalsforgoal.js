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
exports.GetSubgoalsForGoalResponse = exports.GetSubgoalsForGoalRequest = exports.GetSubgoalsForGoal200ApplicationJson = exports.GetSubgoalsForGoalQueryParams = exports.GetSubgoalsForGoalPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSubgoalsForGoalPathParams = /** @class */ (function (_super) {
    __extends(GetSubgoalsForGoalPathParams, _super);
    function GetSubgoalsForGoalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=goal_gid" }),
        __metadata("design:type", String)
    ], GetSubgoalsForGoalPathParams.prototype, "goalGid", void 0);
    return GetSubgoalsForGoalPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSubgoalsForGoalPathParams = GetSubgoalsForGoalPathParams;
var GetSubgoalsForGoalQueryParams = /** @class */ (function (_super) {
    __extends(GetSubgoalsForGoalQueryParams, _super);
    function GetSubgoalsForGoalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetSubgoalsForGoalQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetSubgoalsForGoalQueryParams.prototype, "optPretty", void 0);
    return GetSubgoalsForGoalQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSubgoalsForGoalQueryParams = GetSubgoalsForGoalQueryParams;
var GetSubgoalsForGoal200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSubgoalsForGoal200ApplicationJson, _super);
    function GetSubgoalsForGoal200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.GoalCompact }),
        __metadata("design:type", Array)
    ], GetSubgoalsForGoal200ApplicationJson.prototype, "data", void 0);
    return GetSubgoalsForGoal200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSubgoalsForGoal200ApplicationJson = GetSubgoalsForGoal200ApplicationJson;
var GetSubgoalsForGoalRequest = /** @class */ (function (_super) {
    __extends(GetSubgoalsForGoalRequest, _super);
    function GetSubgoalsForGoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubgoalsForGoalPathParams)
    ], GetSubgoalsForGoalRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubgoalsForGoalQueryParams)
    ], GetSubgoalsForGoalRequest.prototype, "queryParams", void 0);
    return GetSubgoalsForGoalRequest;
}(utils_1.SpeakeasyBase));
exports.GetSubgoalsForGoalRequest = GetSubgoalsForGoalRequest;
var GetSubgoalsForGoalResponse = /** @class */ (function (_super) {
    __extends(GetSubgoalsForGoalResponse, _super);
    function GetSubgoalsForGoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSubgoalsForGoalResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetSubgoalsForGoalResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSubgoalsForGoalResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubgoalsForGoal200ApplicationJson)
    ], GetSubgoalsForGoalResponse.prototype, "getSubgoalsForGoal200ApplicationJSONObject", void 0);
    return GetSubgoalsForGoalResponse;
}(utils_1.SpeakeasyBase));
exports.GetSubgoalsForGoalResponse = GetSubgoalsForGoalResponse;
