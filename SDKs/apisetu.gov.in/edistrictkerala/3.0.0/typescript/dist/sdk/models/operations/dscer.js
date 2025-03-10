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
exports.DscerResponse = exports.Dscer400ApplicationJSON = exports.Dscer400ApplicationJSONErrorDescriptionEnum = exports.Dscer400ApplicationJSONErrorEnum = exports.Dscer401ApplicationJSON = exports.Dscer401ApplicationJSONErrorDescriptionEnum = exports.Dscer401ApplicationJSONErrorEnum = exports.Dscer404ApplicationJSON = exports.Dscer404ApplicationJSONErrorDescriptionEnum = exports.Dscer404ApplicationJSONErrorEnum = exports.Dscer500ApplicationJSON = exports.Dscer500ApplicationJSONErrorDescriptionEnum = exports.Dscer500ApplicationJSONErrorEnum = exports.Dscer502ApplicationJSON = exports.Dscer502ApplicationJSONErrorDescriptionEnum = exports.Dscer502ApplicationJSONErrorEnum = exports.Dscer503ApplicationJSON = exports.Dscer503ApplicationJSONErrorDescriptionEnum = exports.Dscer503ApplicationJSONErrorEnum = exports.Dscer504ApplicationJSON = exports.Dscer504ApplicationJSONErrorDescriptionEnum = exports.Dscer504ApplicationJSONErrorEnum = exports.DscerRequestBody = exports.DscerRequestBodyFormatEnum = exports.DscerRequestBodyCertificateParameters = exports.DscerSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
var DscerSecurity = /** @class */ (function (_super) {
    __extends(DscerSecurity, _super);
    function DscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-APIKEY",
        }),
        __metadata("design:type", String)
    ], DscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-CLIENTID",
        }),
        __metadata("design:type", String)
    ], DscerSecurity.prototype, "clientId", void 0);
    return DscerSecurity;
}(utils_1.SpeakeasyBase));
exports.DscerSecurity = DscerSecurity;
var DscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DscerRequestBodyCertificateParameters, _super);
    function DscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "aplno" }),
        __metadata("design:type", String)
    ], DscerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "certno" }),
        __metadata("design:type", String)
    ], DscerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sccd" }),
        __metadata("design:type", String)
    ], DscerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return DscerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DscerRequestBodyCertificateParameters = DscerRequestBodyCertificateParameters;
/**
 * The format of the certificate in response.
 */
var DscerRequestBodyFormatEnum;
(function (DscerRequestBodyFormatEnum) {
    DscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DscerRequestBodyFormatEnum = exports.DscerRequestBodyFormatEnum || (exports.DscerRequestBodyFormatEnum = {}));
/**
 * Request format
 */
var DscerRequestBody = /** @class */ (function (_super) {
    __extends(DscerRequestBody, _super);
    function DscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "certificateParameters" }),
        (0, class_transformer_1.Type)(function () { return DscerRequestBodyCertificateParameters; }),
        __metadata("design:type", DscerRequestBodyCertificateParameters)
    ], DscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "consentArtifact" }),
        (0, class_transformer_1.Type)(function () { return shared.ConsentArtifactSchema; }),
        __metadata("design:type", shared.ConsentArtifactSchema)
    ], DscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "format" }),
        __metadata("design:type", String)
    ], DscerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "txnId" }),
        __metadata("design:type", String)
    ], DscerRequestBody.prototype, "txnId", void 0);
    return DscerRequestBody;
}(utils_1.SpeakeasyBase));
exports.DscerRequestBody = DscerRequestBody;
var Dscer504ApplicationJSONErrorEnum;
(function (Dscer504ApplicationJSONErrorEnum) {
    Dscer504ApplicationJSONErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dscer504ApplicationJSONErrorEnum = exports.Dscer504ApplicationJSONErrorEnum || (exports.Dscer504ApplicationJSONErrorEnum = {}));
var Dscer504ApplicationJSONErrorDescriptionEnum;
(function (Dscer504ApplicationJSONErrorDescriptionEnum) {
    Dscer504ApplicationJSONErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dscer504ApplicationJSONErrorDescriptionEnum = exports.Dscer504ApplicationJSONErrorDescriptionEnum || (exports.Dscer504ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Gateway timeout
 */
var Dscer504ApplicationJSON = /** @class */ (function (_super) {
    __extends(Dscer504ApplicationJSON, _super);
    function Dscer504ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Dscer504ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Dscer504ApplicationJSON.prototype, "errorDescription", void 0);
    return Dscer504ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Dscer504ApplicationJSON = Dscer504ApplicationJSON;
var Dscer503ApplicationJSONErrorEnum;
(function (Dscer503ApplicationJSONErrorEnum) {
    Dscer503ApplicationJSONErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dscer503ApplicationJSONErrorEnum = exports.Dscer503ApplicationJSONErrorEnum || (exports.Dscer503ApplicationJSONErrorEnum = {}));
var Dscer503ApplicationJSONErrorDescriptionEnum;
(function (Dscer503ApplicationJSONErrorDescriptionEnum) {
    Dscer503ApplicationJSONErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dscer503ApplicationJSONErrorDescriptionEnum = exports.Dscer503ApplicationJSONErrorDescriptionEnum || (exports.Dscer503ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Service unavailable
 */
var Dscer503ApplicationJSON = /** @class */ (function (_super) {
    __extends(Dscer503ApplicationJSON, _super);
    function Dscer503ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Dscer503ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Dscer503ApplicationJSON.prototype, "errorDescription", void 0);
    return Dscer503ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Dscer503ApplicationJSON = Dscer503ApplicationJSON;
var Dscer502ApplicationJSONErrorEnum;
(function (Dscer502ApplicationJSONErrorEnum) {
    Dscer502ApplicationJSONErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dscer502ApplicationJSONErrorEnum = exports.Dscer502ApplicationJSONErrorEnum || (exports.Dscer502ApplicationJSONErrorEnum = {}));
var Dscer502ApplicationJSONErrorDescriptionEnum;
(function (Dscer502ApplicationJSONErrorDescriptionEnum) {
    Dscer502ApplicationJSONErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dscer502ApplicationJSONErrorDescriptionEnum = exports.Dscer502ApplicationJSONErrorDescriptionEnum || (exports.Dscer502ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Bad gateway
 */
var Dscer502ApplicationJSON = /** @class */ (function (_super) {
    __extends(Dscer502ApplicationJSON, _super);
    function Dscer502ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Dscer502ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Dscer502ApplicationJSON.prototype, "errorDescription", void 0);
    return Dscer502ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Dscer502ApplicationJSON = Dscer502ApplicationJSON;
var Dscer500ApplicationJSONErrorEnum;
(function (Dscer500ApplicationJSONErrorEnum) {
    Dscer500ApplicationJSONErrorEnum["InternalServerError"] = "internal_server_error";
})(Dscer500ApplicationJSONErrorEnum = exports.Dscer500ApplicationJSONErrorEnum || (exports.Dscer500ApplicationJSONErrorEnum = {}));
var Dscer500ApplicationJSONErrorDescriptionEnum;
(function (Dscer500ApplicationJSONErrorDescriptionEnum) {
    Dscer500ApplicationJSONErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dscer500ApplicationJSONErrorDescriptionEnum = exports.Dscer500ApplicationJSONErrorDescriptionEnum || (exports.Dscer500ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Internal server error
 */
var Dscer500ApplicationJSON = /** @class */ (function (_super) {
    __extends(Dscer500ApplicationJSON, _super);
    function Dscer500ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Dscer500ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Dscer500ApplicationJSON.prototype, "errorDescription", void 0);
    return Dscer500ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Dscer500ApplicationJSON = Dscer500ApplicationJSON;
var Dscer404ApplicationJSONErrorEnum;
(function (Dscer404ApplicationJSONErrorEnum) {
    Dscer404ApplicationJSONErrorEnum["RecordNotFound"] = "record_not_found";
    Dscer404ApplicationJSONErrorEnum["UrlNotFound"] = "url_not_found";
})(Dscer404ApplicationJSONErrorEnum = exports.Dscer404ApplicationJSONErrorEnum || (exports.Dscer404ApplicationJSONErrorEnum = {}));
var Dscer404ApplicationJSONErrorDescriptionEnum;
(function (Dscer404ApplicationJSONErrorDescriptionEnum) {
    Dscer404ApplicationJSONErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dscer404ApplicationJSONErrorDescriptionEnum["YourAPIUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dscer404ApplicationJSONErrorDescriptionEnum = exports.Dscer404ApplicationJSONErrorDescriptionEnum || (exports.Dscer404ApplicationJSONErrorDescriptionEnum = {}));
/**
 * No record found
 */
var Dscer404ApplicationJSON = /** @class */ (function (_super) {
    __extends(Dscer404ApplicationJSON, _super);
    function Dscer404ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Dscer404ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Dscer404ApplicationJSON.prototype, "errorDescription", void 0);
    return Dscer404ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Dscer404ApplicationJSON = Dscer404ApplicationJSON;
var Dscer401ApplicationJSONErrorEnum;
(function (Dscer401ApplicationJSONErrorEnum) {
    Dscer401ApplicationJSONErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dscer401ApplicationJSONErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dscer401ApplicationJSONErrorEnum = exports.Dscer401ApplicationJSONErrorEnum || (exports.Dscer401ApplicationJSONErrorEnum = {}));
var Dscer401ApplicationJSONErrorDescriptionEnum;
(function (Dscer401ApplicationJSONErrorDescriptionEnum) {
    Dscer401ApplicationJSONErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dscer401ApplicationJSONErrorDescriptionEnum["YouAreNotAuthorizedToUseThisAPI"] = "You are not authorized to use this API";
})(Dscer401ApplicationJSONErrorDescriptionEnum = exports.Dscer401ApplicationJSONErrorDescriptionEnum || (exports.Dscer401ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Unauthorized access
 */
var Dscer401ApplicationJSON = /** @class */ (function (_super) {
    __extends(Dscer401ApplicationJSON, _super);
    function Dscer401ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Dscer401ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Dscer401ApplicationJSON.prototype, "errorDescription", void 0);
    return Dscer401ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Dscer401ApplicationJSON = Dscer401ApplicationJSON;
var Dscer400ApplicationJSONErrorEnum;
(function (Dscer400ApplicationJSONErrorEnum) {
    Dscer400ApplicationJSONErrorEnum["MissingParameter"] = "missing_parameter";
    Dscer400ApplicationJSONErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dscer400ApplicationJSONErrorEnum["InvalidFormat"] = "invalid_format";
    Dscer400ApplicationJSONErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dscer400ApplicationJSONErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dscer400ApplicationJSONErrorEnum = exports.Dscer400ApplicationJSONErrorEnum || (exports.Dscer400ApplicationJSONErrorEnum = {}));
var Dscer400ApplicationJSONErrorDescriptionEnum;
(function (Dscer400ApplicationJSONErrorDescriptionEnum) {
    Dscer400ApplicationJSONErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dscer400ApplicationJSONErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dscer400ApplicationJSONErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dscer400ApplicationJSONErrorDescriptionEnum["TheTxnIdParameterMustBeInUUIDFormat"] = "The txnId parameter must be in UUID format";
    Dscer400ApplicationJSONErrorDescriptionEnum["TheConsentIdParameterMustBeInUUIDFormat"] = "The consentId parameter must be in UUID format";
})(Dscer400ApplicationJSONErrorDescriptionEnum = exports.Dscer400ApplicationJSONErrorDescriptionEnum || (exports.Dscer400ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Bad request
 */
var Dscer400ApplicationJSON = /** @class */ (function (_super) {
    __extends(Dscer400ApplicationJSON, _super);
    function Dscer400ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Dscer400ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Dscer400ApplicationJSON.prototype, "errorDescription", void 0);
    return Dscer400ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Dscer400ApplicationJSON = Dscer400ApplicationJSON;
var DscerResponse = /** @class */ (function (_super) {
    __extends(DscerResponse, _super);
    function DscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DscerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DscerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DscerResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer400ApplicationJSON)
    ], DscerResponse.prototype, "dscer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer401ApplicationJSON)
    ], DscerResponse.prototype, "dscer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer404ApplicationJSON)
    ], DscerResponse.prototype, "dscer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer500ApplicationJSON)
    ], DscerResponse.prototype, "dscer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer502ApplicationJSON)
    ], DscerResponse.prototype, "dscer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer503ApplicationJSON)
    ], DscerResponse.prototype, "dscer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer504ApplicationJSON)
    ], DscerResponse.prototype, "dscer504ApplicationJSONObject", void 0);
    return DscerResponse;
}(utils_1.SpeakeasyBase));
exports.DscerResponse = DscerResponse;
