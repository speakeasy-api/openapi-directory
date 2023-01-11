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
exports.UpdateCdnEndpointResponse = exports.UpdateCdnEndpointRequest = exports.UpdateCdnEndpoint401ApplicationJson = exports.UpdateCdnEndpointRequestBody = exports.UpdateCdnEndpointPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateCdnEndpointPathParams = /** @class */ (function (_super) {
    __extends(UpdateCdnEndpointPathParams, _super);
    function UpdateCdnEndpointPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cdn_id" }),
        __metadata("design:type", String)
    ], UpdateCdnEndpointPathParams.prototype, "cdnId", void 0);
    return UpdateCdnEndpointPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateCdnEndpointPathParams = UpdateCdnEndpointPathParams;
var UpdateCdnEndpointRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCdnEndpointRequestBody, _super);
    function UpdateCdnEndpointRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate_id" }),
        __metadata("design:type", String)
    ], UpdateCdnEndpointRequestBody.prototype, "certificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_domain" }),
        __metadata("design:type", String)
    ], UpdateCdnEndpointRequestBody.prototype, "customDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], UpdateCdnEndpointRequestBody.prototype, "ttl", void 0);
    return UpdateCdnEndpointRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateCdnEndpointRequestBody = UpdateCdnEndpointRequestBody;
var UpdateCdnEndpoint401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCdnEndpoint401ApplicationJson, _super);
    function UpdateCdnEndpoint401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateCdnEndpoint401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateCdnEndpoint401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], UpdateCdnEndpoint401ApplicationJson.prototype, "requestId", void 0);
    return UpdateCdnEndpoint401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateCdnEndpoint401ApplicationJson = UpdateCdnEndpoint401ApplicationJson;
var UpdateCdnEndpointRequest = /** @class */ (function (_super) {
    __extends(UpdateCdnEndpointRequest, _super);
    function UpdateCdnEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCdnEndpointPathParams)
    ], UpdateCdnEndpointRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCdnEndpointRequestBody)
    ], UpdateCdnEndpointRequest.prototype, "request", void 0);
    return UpdateCdnEndpointRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateCdnEndpointRequest = UpdateCdnEndpointRequest;
var UpdateCdnEndpointResponse = /** @class */ (function (_super) {
    __extends(UpdateCdnEndpointResponse, _super);
    function UpdateCdnEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCdnEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateCdnEndpointResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateCdnEndpointResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateCdnEndpointResponse.prototype, "updateCdnEndpoint202ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCdnEndpoint401ApplicationJson)
    ], UpdateCdnEndpointResponse.prototype, "updateCdnEndpoint401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], UpdateCdnEndpointResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return UpdateCdnEndpointResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateCdnEndpointResponse = UpdateCdnEndpointResponse;
