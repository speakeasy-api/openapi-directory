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
exports.GetSubtasksForTaskResponse = exports.GetSubtasksForTaskRequest = exports.GetSubtasksForTask200ApplicationJson = exports.GetSubtasksForTaskQueryParams = exports.GetSubtasksForTaskPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSubtasksForTaskPathParams = /** @class */ (function (_super) {
    __extends(GetSubtasksForTaskPathParams, _super);
    function GetSubtasksForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], GetSubtasksForTaskPathParams.prototype, "taskGid", void 0);
    return GetSubtasksForTaskPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSubtasksForTaskPathParams = GetSubtasksForTaskPathParams;
var GetSubtasksForTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetSubtasksForTaskQueryParams, _super);
    function GetSubtasksForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSubtasksForTaskQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetSubtasksForTaskQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetSubtasksForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetSubtasksForTaskQueryParams.prototype, "optPretty", void 0);
    return GetSubtasksForTaskQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSubtasksForTaskQueryParams = GetSubtasksForTaskQueryParams;
var GetSubtasksForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSubtasksForTask200ApplicationJson, _super);
    function GetSubtasksForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.TaskCompact }),
        __metadata("design:type", Array)
    ], GetSubtasksForTask200ApplicationJson.prototype, "data", void 0);
    return GetSubtasksForTask200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSubtasksForTask200ApplicationJson = GetSubtasksForTask200ApplicationJson;
var GetSubtasksForTaskRequest = /** @class */ (function (_super) {
    __extends(GetSubtasksForTaskRequest, _super);
    function GetSubtasksForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubtasksForTaskPathParams)
    ], GetSubtasksForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubtasksForTaskQueryParams)
    ], GetSubtasksForTaskRequest.prototype, "queryParams", void 0);
    return GetSubtasksForTaskRequest;
}(utils_1.SpeakeasyBase));
exports.GetSubtasksForTaskRequest = GetSubtasksForTaskRequest;
var GetSubtasksForTaskResponse = /** @class */ (function (_super) {
    __extends(GetSubtasksForTaskResponse, _super);
    function GetSubtasksForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSubtasksForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetSubtasksForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSubtasksForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubtasksForTask200ApplicationJson)
    ], GetSubtasksForTaskResponse.prototype, "getSubtasksForTask200ApplicationJSONObject", void 0);
    return GetSubtasksForTaskResponse;
}(utils_1.SpeakeasyBase));
exports.GetSubtasksForTaskResponse = GetSubtasksForTaskResponse;
