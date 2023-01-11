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
exports.CreateSubscriptionDefinitionResponse = exports.CreateSubscriptionDefinitionRequest = exports.CreateSubscriptionDefinitionRequestBody = exports.CreateSubscriptionDefinitionRequestBodyInitialVersion = exports.CreateSubscriptionDefinitionHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateSubscriptionDefinitionHeaders = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionHeaders, _super);
    function CreateSubscriptionDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateSubscriptionDefinitionHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateSubscriptionDefinitionHeaders = CreateSubscriptionDefinitionHeaders;
// CreateSubscriptionDefinitionRequestBodyInitialVersion
/**
 * Information about a subscription definition version.
**/
var CreateSubscriptionDefinitionRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionRequestBodyInitialVersion, _super);
    function CreateSubscriptionDefinitionRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Subscriptions", elemType: shared.Subscription }),
        __metadata("design:type", Array)
    ], CreateSubscriptionDefinitionRequestBodyInitialVersion.prototype, "subscriptions", void 0);
    return CreateSubscriptionDefinitionRequestBodyInitialVersion;
}(utils_1.SpeakeasyBase));
exports.CreateSubscriptionDefinitionRequestBodyInitialVersion = CreateSubscriptionDefinitionRequestBodyInitialVersion;
var CreateSubscriptionDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionRequestBody, _super);
    function CreateSubscriptionDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateSubscriptionDefinitionRequestBodyInitialVersion)
    ], CreateSubscriptionDefinitionRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateSubscriptionDefinitionRequestBody.prototype, "tags", void 0);
    return CreateSubscriptionDefinitionRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateSubscriptionDefinitionRequestBody = CreateSubscriptionDefinitionRequestBody;
var CreateSubscriptionDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionRequest, _super);
    function CreateSubscriptionDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSubscriptionDefinitionHeaders)
    ], CreateSubscriptionDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSubscriptionDefinitionRequestBody)
    ], CreateSubscriptionDefinitionRequest.prototype, "request", void 0);
    return CreateSubscriptionDefinitionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSubscriptionDefinitionRequest = CreateSubscriptionDefinitionRequest;
var CreateSubscriptionDefinitionResponse = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionResponse, _super);
    function CreateSubscriptionDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSubscriptionDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateSubscriptionDefinitionResponse)
    ], CreateSubscriptionDefinitionResponse.prototype, "createSubscriptionDefinitionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSubscriptionDefinitionResponse.prototype, "statusCode", void 0);
    return CreateSubscriptionDefinitionResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSubscriptionDefinitionResponse = CreateSubscriptionDefinitionResponse;
