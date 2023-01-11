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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReimportApiResponse = exports.ReimportApiResponseCorsConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
// ReimportApiResponseCorsConfiguration
/**
 * A CORS configuration. Supported only for HTTP APIs.
**/
var ReimportApiResponseCorsConfiguration = /** @class */ (function (_super) {
    __extends(ReimportApiResponseCorsConfiguration, _super);
    function ReimportApiResponseCorsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AllowCredentials" }),
        __metadata("design:type", Object)
    ], ReimportApiResponseCorsConfiguration.prototype, "allowCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AllowHeaders" }),
        __metadata("design:type", Object)
    ], ReimportApiResponseCorsConfiguration.prototype, "allowHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AllowMethods" }),
        __metadata("design:type", Object)
    ], ReimportApiResponseCorsConfiguration.prototype, "allowMethods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AllowOrigins" }),
        __metadata("design:type", Object)
    ], ReimportApiResponseCorsConfiguration.prototype, "allowOrigins", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExposeHeaders" }),
        __metadata("design:type", Object)
    ], ReimportApiResponseCorsConfiguration.prototype, "exposeHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxAge" }),
        __metadata("design:type", Object)
    ], ReimportApiResponseCorsConfiguration.prototype, "maxAge", void 0);
    return ReimportApiResponseCorsConfiguration;
}(utils_1.SpeakeasyBase));
exports.ReimportApiResponseCorsConfiguration = ReimportApiResponseCorsConfiguration;
var ReimportApiResponse = /** @class */ (function (_super) {
    __extends(ReimportApiResponse, _super);
    function ReimportApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiEndpoint" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "apiEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiGatewayManaged" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "apiGatewayManaged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiId" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "apiId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiKeySelectionExpression" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "apiKeySelectionExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CorsConfiguration" }),
        __metadata("design:type", ReimportApiResponseCorsConfiguration)
    ], ReimportApiResponse.prototype, "corsConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DisableExecuteApiEndpoint" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "disableExecuteApiEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DisableSchemaValidation" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "disableSchemaValidation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ImportInfo" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "importInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProtocolType" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "protocolType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RouteSelectionExpression" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "routeSelectionExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Version" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Warnings" }),
        __metadata("design:type", Object)
    ], ReimportApiResponse.prototype, "warnings", void 0);
    return ReimportApiResponse;
}(utils_1.SpeakeasyBase));
exports.ReimportApiResponse = ReimportApiResponse;
