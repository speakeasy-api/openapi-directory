"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.CripcResponse = exports.Cripc400ApplicationJSON = exports.Cripc400ApplicationJSONErrorDescriptionEnum = exports.Cripc400ApplicationJSONErrorEnum = exports.Cripc401ApplicationJSON = exports.Cripc401ApplicationJSONErrorDescriptionEnum = exports.Cripc401ApplicationJSONErrorEnum = exports.Cripc404ApplicationJSON = exports.Cripc404ApplicationJSONErrorDescriptionEnum = exports.Cripc404ApplicationJSONErrorEnum = exports.Cripc500ApplicationJSON = exports.Cripc500ApplicationJSONErrorDescriptionEnum = exports.Cripc500ApplicationJSONErrorEnum = exports.Cripc502ApplicationJSON = exports.Cripc502ApplicationJSONErrorDescriptionEnum = exports.Cripc502ApplicationJSONErrorEnum = exports.Cripc503ApplicationJSON = exports.Cripc503ApplicationJSONErrorDescriptionEnum = exports.Cripc503ApplicationJSONErrorEnum = exports.Cripc504ApplicationJSON = exports.Cripc504ApplicationJSONErrorDescriptionEnum = exports.Cripc504ApplicationJSONErrorEnum = exports.CripcRequestBody = exports.CripcRequestBodyFormatEnum = exports.CripcRequestBodyCertificateParameters = exports.CripcSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
var CripcSecurity = /** @class */ (function (_super) {
    __extends(CripcSecurity, _super);
    function CripcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-APIKEY",
        }),
        __metadata("design:type", String)
    ], CripcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-CLIENTID",
        }),
        __metadata("design:type", String)
    ], CripcSecurity.prototype, "clientId", void 0);
    return CripcSecurity;
}(utils_1.SpeakeasyBase));
exports.CripcSecurity = CripcSecurity;
var CripcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CripcRequestBodyCertificateParameters, _super);
    function CripcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UDF1" }),
        __metadata("design:type", String)
    ], CripcRequestBodyCertificateParameters.prototype, "udf1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UDF2" }),
        __metadata("design:type", String)
    ], CripcRequestBodyCertificateParameters.prototype, "udf2", void 0);
    return CripcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CripcRequestBodyCertificateParameters = CripcRequestBodyCertificateParameters;
/**
 * The format of the certificate in response.
 */
var CripcRequestBodyFormatEnum;
(function (CripcRequestBodyFormatEnum) {
    CripcRequestBodyFormatEnum["Pdf"] = "pdf";
})(CripcRequestBodyFormatEnum = exports.CripcRequestBodyFormatEnum || (exports.CripcRequestBodyFormatEnum = {}));
/**
 * Request format
 */
var CripcRequestBody = /** @class */ (function (_super) {
    __extends(CripcRequestBody, _super);
    function CripcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "certificateParameters" }),
        (0, class_transformer_1.Type)(function () { return CripcRequestBodyCertificateParameters; }),
        __metadata("design:type", CripcRequestBodyCertificateParameters)
    ], CripcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "consentArtifact" }),
        (0, class_transformer_1.Type)(function () { return shared.ConsentArtifactSchema; }),
        __metadata("design:type", shared.ConsentArtifactSchema)
    ], CripcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "format" }),
        __metadata("design:type", String)
    ], CripcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "txnId" }),
        __metadata("design:type", String)
    ], CripcRequestBody.prototype, "txnId", void 0);
    return CripcRequestBody;
}(utils_1.SpeakeasyBase));
exports.CripcRequestBody = CripcRequestBody;
var Cripc504ApplicationJSONErrorEnum;
(function (Cripc504ApplicationJSONErrorEnum) {
    Cripc504ApplicationJSONErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cripc504ApplicationJSONErrorEnum = exports.Cripc504ApplicationJSONErrorEnum || (exports.Cripc504ApplicationJSONErrorEnum = {}));
var Cripc504ApplicationJSONErrorDescriptionEnum;
(function (Cripc504ApplicationJSONErrorDescriptionEnum) {
    Cripc504ApplicationJSONErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cripc504ApplicationJSONErrorDescriptionEnum = exports.Cripc504ApplicationJSONErrorDescriptionEnum || (exports.Cripc504ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Gateway timeout
 */
var Cripc504ApplicationJSON = /** @class */ (function (_super) {
    __extends(Cripc504ApplicationJSON, _super);
    function Cripc504ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Cripc504ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Cripc504ApplicationJSON.prototype, "errorDescription", void 0);
    return Cripc504ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Cripc504ApplicationJSON = Cripc504ApplicationJSON;
var Cripc503ApplicationJSONErrorEnum;
(function (Cripc503ApplicationJSONErrorEnum) {
    Cripc503ApplicationJSONErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cripc503ApplicationJSONErrorEnum = exports.Cripc503ApplicationJSONErrorEnum || (exports.Cripc503ApplicationJSONErrorEnum = {}));
var Cripc503ApplicationJSONErrorDescriptionEnum;
(function (Cripc503ApplicationJSONErrorDescriptionEnum) {
    Cripc503ApplicationJSONErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cripc503ApplicationJSONErrorDescriptionEnum = exports.Cripc503ApplicationJSONErrorDescriptionEnum || (exports.Cripc503ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Service unavailable
 */
var Cripc503ApplicationJSON = /** @class */ (function (_super) {
    __extends(Cripc503ApplicationJSON, _super);
    function Cripc503ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Cripc503ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Cripc503ApplicationJSON.prototype, "errorDescription", void 0);
    return Cripc503ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Cripc503ApplicationJSON = Cripc503ApplicationJSON;
var Cripc502ApplicationJSONErrorEnum;
(function (Cripc502ApplicationJSONErrorEnum) {
    Cripc502ApplicationJSONErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cripc502ApplicationJSONErrorEnum = exports.Cripc502ApplicationJSONErrorEnum || (exports.Cripc502ApplicationJSONErrorEnum = {}));
var Cripc502ApplicationJSONErrorDescriptionEnum;
(function (Cripc502ApplicationJSONErrorDescriptionEnum) {
    Cripc502ApplicationJSONErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cripc502ApplicationJSONErrorDescriptionEnum = exports.Cripc502ApplicationJSONErrorDescriptionEnum || (exports.Cripc502ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Bad gateway
 */
var Cripc502ApplicationJSON = /** @class */ (function (_super) {
    __extends(Cripc502ApplicationJSON, _super);
    function Cripc502ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Cripc502ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Cripc502ApplicationJSON.prototype, "errorDescription", void 0);
    return Cripc502ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Cripc502ApplicationJSON = Cripc502ApplicationJSON;
var Cripc500ApplicationJSONErrorEnum;
(function (Cripc500ApplicationJSONErrorEnum) {
    Cripc500ApplicationJSONErrorEnum["InternalServerError"] = "internal_server_error";
})(Cripc500ApplicationJSONErrorEnum = exports.Cripc500ApplicationJSONErrorEnum || (exports.Cripc500ApplicationJSONErrorEnum = {}));
var Cripc500ApplicationJSONErrorDescriptionEnum;
(function (Cripc500ApplicationJSONErrorDescriptionEnum) {
    Cripc500ApplicationJSONErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cripc500ApplicationJSONErrorDescriptionEnum = exports.Cripc500ApplicationJSONErrorDescriptionEnum || (exports.Cripc500ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Internal server error
 */
var Cripc500ApplicationJSON = /** @class */ (function (_super) {
    __extends(Cripc500ApplicationJSON, _super);
    function Cripc500ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Cripc500ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Cripc500ApplicationJSON.prototype, "errorDescription", void 0);
    return Cripc500ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Cripc500ApplicationJSON = Cripc500ApplicationJSON;
var Cripc404ApplicationJSONErrorEnum;
(function (Cripc404ApplicationJSONErrorEnum) {
    Cripc404ApplicationJSONErrorEnum["RecordNotFound"] = "record_not_found";
    Cripc404ApplicationJSONErrorEnum["UrlNotFound"] = "url_not_found";
})(Cripc404ApplicationJSONErrorEnum = exports.Cripc404ApplicationJSONErrorEnum || (exports.Cripc404ApplicationJSONErrorEnum = {}));
var Cripc404ApplicationJSONErrorDescriptionEnum;
(function (Cripc404ApplicationJSONErrorDescriptionEnum) {
    Cripc404ApplicationJSONErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cripc404ApplicationJSONErrorDescriptionEnum["YourAPIUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cripc404ApplicationJSONErrorDescriptionEnum = exports.Cripc404ApplicationJSONErrorDescriptionEnum || (exports.Cripc404ApplicationJSONErrorDescriptionEnum = {}));
/**
 * No record found
 */
var Cripc404ApplicationJSON = /** @class */ (function (_super) {
    __extends(Cripc404ApplicationJSON, _super);
    function Cripc404ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Cripc404ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Cripc404ApplicationJSON.prototype, "errorDescription", void 0);
    return Cripc404ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Cripc404ApplicationJSON = Cripc404ApplicationJSON;
var Cripc401ApplicationJSONErrorEnum;
(function (Cripc401ApplicationJSONErrorEnum) {
    Cripc401ApplicationJSONErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cripc401ApplicationJSONErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cripc401ApplicationJSONErrorEnum = exports.Cripc401ApplicationJSONErrorEnum || (exports.Cripc401ApplicationJSONErrorEnum = {}));
var Cripc401ApplicationJSONErrorDescriptionEnum;
(function (Cripc401ApplicationJSONErrorDescriptionEnum) {
    Cripc401ApplicationJSONErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cripc401ApplicationJSONErrorDescriptionEnum["YouAreNotAuthorizedToUseThisAPI"] = "You are not authorized to use this API";
})(Cripc401ApplicationJSONErrorDescriptionEnum = exports.Cripc401ApplicationJSONErrorDescriptionEnum || (exports.Cripc401ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Unauthorized access
 */
var Cripc401ApplicationJSON = /** @class */ (function (_super) {
    __extends(Cripc401ApplicationJSON, _super);
    function Cripc401ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Cripc401ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Cripc401ApplicationJSON.prototype, "errorDescription", void 0);
    return Cripc401ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Cripc401ApplicationJSON = Cripc401ApplicationJSON;
var Cripc400ApplicationJSONErrorEnum;
(function (Cripc400ApplicationJSONErrorEnum) {
    Cripc400ApplicationJSONErrorEnum["MissingParameter"] = "missing_parameter";
    Cripc400ApplicationJSONErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cripc400ApplicationJSONErrorEnum["InvalidFormat"] = "invalid_format";
    Cripc400ApplicationJSONErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cripc400ApplicationJSONErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cripc400ApplicationJSONErrorEnum = exports.Cripc400ApplicationJSONErrorEnum || (exports.Cripc400ApplicationJSONErrorEnum = {}));
var Cripc400ApplicationJSONErrorDescriptionEnum;
(function (Cripc400ApplicationJSONErrorDescriptionEnum) {
    Cripc400ApplicationJSONErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cripc400ApplicationJSONErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cripc400ApplicationJSONErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cripc400ApplicationJSONErrorDescriptionEnum["TheTxnIdParameterMustBeInUUIDFormat"] = "The txnId parameter must be in UUID format";
    Cripc400ApplicationJSONErrorDescriptionEnum["TheConsentIdParameterMustBeInUUIDFormat"] = "The consentId parameter must be in UUID format";
})(Cripc400ApplicationJSONErrorDescriptionEnum = exports.Cripc400ApplicationJSONErrorDescriptionEnum || (exports.Cripc400ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Bad request
 */
var Cripc400ApplicationJSON = /** @class */ (function (_super) {
    __extends(Cripc400ApplicationJSON, _super);
    function Cripc400ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Cripc400ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Cripc400ApplicationJSON.prototype, "errorDescription", void 0);
    return Cripc400ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Cripc400ApplicationJSON = Cripc400ApplicationJSON;
var CripcResponse = /** @class */ (function (_super) {
    __extends(CripcResponse, _super);
    function CripcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CripcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CripcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CripcResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc400ApplicationJSON)
    ], CripcResponse.prototype, "cripc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc401ApplicationJSON)
    ], CripcResponse.prototype, "cripc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc404ApplicationJSON)
    ], CripcResponse.prototype, "cripc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc500ApplicationJSON)
    ], CripcResponse.prototype, "cripc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc502ApplicationJSON)
    ], CripcResponse.prototype, "cripc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc503ApplicationJSON)
    ], CripcResponse.prototype, "cripc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc504ApplicationJSON)
    ], CripcResponse.prototype, "cripc504ApplicationJSONObject", void 0);
    return CripcResponse;
}(utils_1.SpeakeasyBase));
exports.CripcResponse = CripcResponse;
