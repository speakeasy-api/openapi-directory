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
exports.UpdateApiResponse = exports.UpdateApiResponseCorsConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
// UpdateApiResponseCorsConfiguration
/**
 * A CORS configuration. Supported only for HTTP APIs.
**/
var UpdateApiResponseCorsConfiguration = /** @class */ (function (_super) {
    __extends(UpdateApiResponseCorsConfiguration, _super);
    function UpdateApiResponseCorsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AllowCredentials" }),
        __metadata("design:type", Object)
    ], UpdateApiResponseCorsConfiguration.prototype, "allowCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AllowHeaders" }),
        __metadata("design:type", Object)
    ], UpdateApiResponseCorsConfiguration.prototype, "allowHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AllowMethods" }),
        __metadata("design:type", Object)
    ], UpdateApiResponseCorsConfiguration.prototype, "allowMethods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AllowOrigins" }),
        __metadata("design:type", Object)
    ], UpdateApiResponseCorsConfiguration.prototype, "allowOrigins", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExposeHeaders" }),
        __metadata("design:type", Object)
    ], UpdateApiResponseCorsConfiguration.prototype, "exposeHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxAge" }),
        __metadata("design:type", Object)
    ], UpdateApiResponseCorsConfiguration.prototype, "maxAge", void 0);
    return UpdateApiResponseCorsConfiguration;
}(utils_1.SpeakeasyBase));
exports.UpdateApiResponseCorsConfiguration = UpdateApiResponseCorsConfiguration;
var UpdateApiResponse = /** @class */ (function (_super) {
    __extends(UpdateApiResponse, _super);
    function UpdateApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiEndpoint" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "apiEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiGatewayManaged" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "apiGatewayManaged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiId" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "apiId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiKeySelectionExpression" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "apiKeySelectionExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CorsConfiguration" }),
        __metadata("design:type", UpdateApiResponseCorsConfiguration)
    ], UpdateApiResponse.prototype, "corsConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DisableExecuteApiEndpoint" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "disableExecuteApiEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DisableSchemaValidation" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "disableSchemaValidation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ImportInfo" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "importInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProtocolType" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "protocolType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RouteSelectionExpression" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "routeSelectionExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Version" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Warnings" }),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "warnings", void 0);
    return UpdateApiResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateApiResponse = UpdateApiResponse;
