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
exports.CreateCertificatesResponse = exports.CreateCertificatesRequest = exports.CreateCertificates401ApplicationJson = exports.CreateCertificates201ApplicationJson = exports.CreateCertificatesRequestBodyCustomCertificateRequest = exports.CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum = exports.CreateCertificatesRequestBodyLetSEncryptCertificateRequest = exports.CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum;
(function (CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum) {
    CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum["Custom"] = "custom";
    CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum["LetsEncrypt"] = "lets_encrypt";
})(CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum = exports.CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum || (exports.CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum = {}));
var CreateCertificatesRequestBodyLetSEncryptCertificateRequest = /** @class */ (function (_super) {
    __extends(CreateCertificatesRequestBodyLetSEncryptCertificateRequest, _super);
    function CreateCertificatesRequestBodyLetSEncryptCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dns_names" }),
        __metadata("design:type", Array)
    ], CreateCertificatesRequestBodyLetSEncryptCertificateRequest.prototype, "dnsNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCertificatesRequestBodyLetSEncryptCertificateRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateCertificatesRequestBodyLetSEncryptCertificateRequest.prototype, "type", void 0);
    return CreateCertificatesRequestBodyLetSEncryptCertificateRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCertificatesRequestBodyLetSEncryptCertificateRequest = CreateCertificatesRequestBodyLetSEncryptCertificateRequest;
var CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum;
(function (CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum) {
    CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum["Custom"] = "custom";
    CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum["LetsEncrypt"] = "lets_encrypt";
})(CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum = exports.CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum || (exports.CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum = {}));
var CreateCertificatesRequestBodyCustomCertificateRequest = /** @class */ (function (_super) {
    __extends(CreateCertificatesRequestBodyCustomCertificateRequest, _super);
    function CreateCertificatesRequestBodyCustomCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate_chain" }),
        __metadata("design:type", String)
    ], CreateCertificatesRequestBodyCustomCertificateRequest.prototype, "certificateChain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leaf_certificate" }),
        __metadata("design:type", String)
    ], CreateCertificatesRequestBodyCustomCertificateRequest.prototype, "leafCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCertificatesRequestBodyCustomCertificateRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_key" }),
        __metadata("design:type", String)
    ], CreateCertificatesRequestBodyCustomCertificateRequest.prototype, "privateKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateCertificatesRequestBodyCustomCertificateRequest.prototype, "type", void 0);
    return CreateCertificatesRequestBodyCustomCertificateRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCertificatesRequestBodyCustomCertificateRequest = CreateCertificatesRequestBodyCustomCertificateRequest;
var CreateCertificates201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCertificates201ApplicationJson, _super);
    function CreateCertificates201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate" }),
        __metadata("design:type", shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems)
    ], CreateCertificates201ApplicationJson.prototype, "certificate", void 0);
    return CreateCertificates201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateCertificates201ApplicationJson = CreateCertificates201ApplicationJson;
var CreateCertificates401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCertificates401ApplicationJson, _super);
    function CreateCertificates401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCertificates401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateCertificates401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateCertificates401ApplicationJson.prototype, "requestId", void 0);
    return CreateCertificates401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateCertificates401ApplicationJson = CreateCertificates401ApplicationJson;
var CreateCertificatesRequest = /** @class */ (function (_super) {
    __extends(CreateCertificatesRequest, _super);
    function CreateCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateCertificatesRequest.prototype, "request", void 0);
    return CreateCertificatesRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCertificatesRequest = CreateCertificatesRequest;
var CreateCertificatesResponse = /** @class */ (function (_super) {
    __extends(CreateCertificatesResponse, _super);
    function CreateCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCertificatesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateCertificatesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCertificates201ApplicationJson)
    ], CreateCertificatesResponse.prototype, "createCertificates201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCertificates401ApplicationJson)
    ], CreateCertificatesResponse.prototype, "createCertificates401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateCertificatesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return CreateCertificatesResponse;
}(utils_1.SpeakeasyBase));
exports.CreateCertificatesResponse = CreateCertificatesResponse;
