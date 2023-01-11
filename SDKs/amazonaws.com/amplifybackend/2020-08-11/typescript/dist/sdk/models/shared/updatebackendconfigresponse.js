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
exports.UpdateBackendConfigResponse = exports.UpdateBackendConfigResponseLoginAuthConfig = void 0;
var utils_1 = require("../../../internal/utils");
// UpdateBackendConfigResponseLoginAuthConfig
/**
 * Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.
**/
var UpdateBackendConfigResponseLoginAuthConfig = /** @class */ (function (_super) {
    __extends(UpdateBackendConfigResponseLoginAuthConfig, _super);
    function UpdateBackendConfigResponseLoginAuthConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AwsCognitoIdentityPoolId" }),
        __metadata("design:type", Object)
    ], UpdateBackendConfigResponseLoginAuthConfig.prototype, "awsCognitoIdentityPoolId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AwsCognitoRegion" }),
        __metadata("design:type", Object)
    ], UpdateBackendConfigResponseLoginAuthConfig.prototype, "awsCognitoRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AwsUserPoolsId" }),
        __metadata("design:type", Object)
    ], UpdateBackendConfigResponseLoginAuthConfig.prototype, "awsUserPoolsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AwsUserPoolsWebClientId" }),
        __metadata("design:type", Object)
    ], UpdateBackendConfigResponseLoginAuthConfig.prototype, "awsUserPoolsWebClientId", void 0);
    return UpdateBackendConfigResponseLoginAuthConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendConfigResponseLoginAuthConfig = UpdateBackendConfigResponseLoginAuthConfig;
var UpdateBackendConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateBackendConfigResponse, _super);
    function UpdateBackendConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AppId" }),
        __metadata("design:type", Object)
    ], UpdateBackendConfigResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BackendManagerAppId" }),
        __metadata("design:type", Object)
    ], UpdateBackendConfigResponse.prototype, "backendManagerAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Error" }),
        __metadata("design:type", Object)
    ], UpdateBackendConfigResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LoginAuthConfig" }),
        __metadata("design:type", UpdateBackendConfigResponseLoginAuthConfig)
    ], UpdateBackendConfigResponse.prototype, "loginAuthConfig", void 0);
    return UpdateBackendConfigResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendConfigResponse = UpdateBackendConfigResponse;
