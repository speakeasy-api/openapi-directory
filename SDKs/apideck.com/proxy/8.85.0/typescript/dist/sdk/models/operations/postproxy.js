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
exports.PostProxyResponse = exports.PostProxyRequest = exports.PostProxy401ApplicationJson = exports.PostProxySecurity = exports.PostProxyHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostProxyHeaders = /** @class */ (function (_super) {
    __extends(PostProxyHeaders, _super);
    function PostProxyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-downstream-authorization" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckDownstreamAuthorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-downstream-url" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckDownstreamUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckServiceId", void 0);
    return PostProxyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostProxyHeaders = PostProxyHeaders;
var PostProxySecurity = /** @class */ (function (_super) {
    __extends(PostProxySecurity, _super);
    function PostProxySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostProxySecurity.prototype, "apiKey", void 0);
    return PostProxySecurity;
}(utils_1.SpeakeasyBase));
exports.PostProxySecurity = PostProxySecurity;
var PostProxy401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostProxy401ApplicationJson, _super);
    function PostProxy401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "ref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_code" }),
        __metadata("design:type", Number)
    ], PostProxy401ApplicationJson.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type_name" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "typeName", void 0);
    return PostProxy401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostProxy401ApplicationJson = PostProxy401ApplicationJson;
var PostProxyRequest = /** @class */ (function (_super) {
    __extends(PostProxyRequest, _super);
    function PostProxyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostProxyHeaders)
    ], PostProxyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=*/*" }),
        __metadata("design:type", Uint8Array)
    ], PostProxyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostProxySecurity)
    ], PostProxyRequest.prototype, "security", void 0);
    return PostProxyRequest;
}(utils_1.SpeakeasyBase));
exports.PostProxyRequest = PostProxyRequest;
var PostProxyResponse = /** @class */ (function (_super) {
    __extends(PostProxyResponse, _super);
    function PostProxyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostProxyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostProxyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostProxyResponse.prototype, "postProxy200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostProxy401ApplicationJson)
    ], PostProxyResponse.prototype, "postProxy401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostProxyResponse.prototype, "postProxyDefaultApplicationJSONAny", void 0);
    return PostProxyResponse;
}(utils_1.SpeakeasyBase));
exports.PostProxyResponse = PostProxyResponse;
