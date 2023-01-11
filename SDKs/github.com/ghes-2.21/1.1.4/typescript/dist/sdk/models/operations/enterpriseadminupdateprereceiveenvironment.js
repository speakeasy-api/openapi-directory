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
exports.EnterpriseAdminUpdatePreReceiveEnvironmentResponse = exports.EnterpriseAdminUpdatePreReceiveEnvironmentRequest = exports.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson = exports.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors = exports.EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody = exports.EnterpriseAdminUpdatePreReceiveEnvironmentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EnterpriseAdminUpdatePreReceiveEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveEnvironmentPathParams, _super);
    function EnterpriseAdminUpdatePreReceiveEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentPathParams.prototype, "preReceiveEnvironmentId", void 0);
    return EnterpriseAdminUpdatePreReceiveEnvironmentPathParams;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminUpdatePreReceiveEnvironmentPathParams = EnterpriseAdminUpdatePreReceiveEnvironmentPathParams;
var EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody, _super);
    function EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody.prototype, "imageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody.prototype, "name", void 0);
    return EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody = EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;
var EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors, _super);
    function EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors.prototype, "resource", void 0);
    return EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors = EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors;
var EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson, _super);
    function EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson.prototype, "message", void 0);
    return EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson = EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson;
var EnterpriseAdminUpdatePreReceiveEnvironmentRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveEnvironmentRequest, _super);
    function EnterpriseAdminUpdatePreReceiveEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminUpdatePreReceiveEnvironmentPathParams)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentRequest.prototype, "request", void 0);
    return EnterpriseAdminUpdatePreReceiveEnvironmentRequest;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminUpdatePreReceiveEnvironmentRequest = EnterpriseAdminUpdatePreReceiveEnvironmentRequest;
var EnterpriseAdminUpdatePreReceiveEnvironmentResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveEnvironmentResponse, _super);
    function EnterpriseAdminUpdatePreReceiveEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentResponse.prototype, "enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreReceiveEnvironment)
    ], EnterpriseAdminUpdatePreReceiveEnvironmentResponse.prototype, "preReceiveEnvironment", void 0);
    return EnterpriseAdminUpdatePreReceiveEnvironmentResponse;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminUpdatePreReceiveEnvironmentResponse = EnterpriseAdminUpdatePreReceiveEnvironmentResponse;
