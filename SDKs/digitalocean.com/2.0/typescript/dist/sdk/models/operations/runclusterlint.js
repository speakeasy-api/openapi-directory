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
exports.RunClusterlintResponse = exports.RunClusterlintRequest = exports.RunClusterlint401ApplicationJson = exports.RunClusterlintRequestBody = exports.RunClusterlintPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RunClusterlintPathParams = /** @class */ (function (_super) {
    __extends(RunClusterlintPathParams, _super);
    function RunClusterlintPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cluster_id" }),
        __metadata("design:type", String)
    ], RunClusterlintPathParams.prototype, "clusterId", void 0);
    return RunClusterlintPathParams;
}(utils_1.SpeakeasyBase));
exports.RunClusterlintPathParams = RunClusterlintPathParams;
var RunClusterlintRequestBody = /** @class */ (function (_super) {
    __extends(RunClusterlintRequestBody, _super);
    function RunClusterlintRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exclude_checks" }),
        __metadata("design:type", Array)
    ], RunClusterlintRequestBody.prototype, "excludeChecks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exclude_groups" }),
        __metadata("design:type", Array)
    ], RunClusterlintRequestBody.prototype, "excludeGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include_checks" }),
        __metadata("design:type", Array)
    ], RunClusterlintRequestBody.prototype, "includeChecks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include_groups" }),
        __metadata("design:type", Array)
    ], RunClusterlintRequestBody.prototype, "includeGroups", void 0);
    return RunClusterlintRequestBody;
}(utils_1.SpeakeasyBase));
exports.RunClusterlintRequestBody = RunClusterlintRequestBody;
var RunClusterlint401ApplicationJson = /** @class */ (function (_super) {
    __extends(RunClusterlint401ApplicationJson, _super);
    function RunClusterlint401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RunClusterlint401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RunClusterlint401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], RunClusterlint401ApplicationJson.prototype, "requestId", void 0);
    return RunClusterlint401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RunClusterlint401ApplicationJson = RunClusterlint401ApplicationJson;
var RunClusterlintRequest = /** @class */ (function (_super) {
    __extends(RunClusterlintRequest, _super);
    function RunClusterlintRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunClusterlintPathParams)
    ], RunClusterlintRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RunClusterlintRequestBody)
    ], RunClusterlintRequest.prototype, "request", void 0);
    return RunClusterlintRequest;
}(utils_1.SpeakeasyBase));
exports.RunClusterlintRequest = RunClusterlintRequest;
var RunClusterlintResponse = /** @class */ (function (_super) {
    __extends(RunClusterlintResponse, _super);
    function RunClusterlintResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RunClusterlintResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RunClusterlintResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RunClusterlintResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RunClusterlintResponse.prototype, "runClusterlint202ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RunClusterlint401ApplicationJson)
    ], RunClusterlintResponse.prototype, "runClusterlint401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], RunClusterlintResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return RunClusterlintResponse;
}(utils_1.SpeakeasyBase));
exports.RunClusterlintResponse = RunClusterlintResponse;
