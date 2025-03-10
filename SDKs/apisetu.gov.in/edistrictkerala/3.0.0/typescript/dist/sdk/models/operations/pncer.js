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
exports.PncerResponse = exports.Pncer400ApplicationJSON = exports.Pncer400ApplicationJSONErrorDescriptionEnum = exports.Pncer400ApplicationJSONErrorEnum = exports.Pncer401ApplicationJSON = exports.Pncer401ApplicationJSONErrorDescriptionEnum = exports.Pncer401ApplicationJSONErrorEnum = exports.Pncer404ApplicationJSON = exports.Pncer404ApplicationJSONErrorDescriptionEnum = exports.Pncer404ApplicationJSONErrorEnum = exports.Pncer500ApplicationJSON = exports.Pncer500ApplicationJSONErrorDescriptionEnum = exports.Pncer500ApplicationJSONErrorEnum = exports.Pncer502ApplicationJSON = exports.Pncer502ApplicationJSONErrorDescriptionEnum = exports.Pncer502ApplicationJSONErrorEnum = exports.Pncer503ApplicationJSON = exports.Pncer503ApplicationJSONErrorDescriptionEnum = exports.Pncer503ApplicationJSONErrorEnum = exports.Pncer504ApplicationJSON = exports.Pncer504ApplicationJSONErrorDescriptionEnum = exports.Pncer504ApplicationJSONErrorEnum = exports.PncerRequestBody = exports.PncerRequestBodyFormatEnum = exports.PncerRequestBodyCertificateParameters = exports.PncerSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
var PncerSecurity = /** @class */ (function (_super) {
    __extends(PncerSecurity, _super);
    function PncerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-APIKEY",
        }),
        __metadata("design:type", String)
    ], PncerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-CLIENTID",
        }),
        __metadata("design:type", String)
    ], PncerSecurity.prototype, "clientId", void 0);
    return PncerSecurity;
}(utils_1.SpeakeasyBase));
exports.PncerSecurity = PncerSecurity;
var PncerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PncerRequestBodyCertificateParameters, _super);
    function PncerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "aplno" }),
        __metadata("design:type", String)
    ], PncerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "certno" }),
        __metadata("design:type", String)
    ], PncerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sccd" }),
        __metadata("design:type", String)
    ], PncerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return PncerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PncerRequestBodyCertificateParameters = PncerRequestBodyCertificateParameters;
/**
 * The format of the certificate in response.
 */
var PncerRequestBodyFormatEnum;
(function (PncerRequestBodyFormatEnum) {
    PncerRequestBodyFormatEnum["Pdf"] = "pdf";
})(PncerRequestBodyFormatEnum = exports.PncerRequestBodyFormatEnum || (exports.PncerRequestBodyFormatEnum = {}));
/**
 * Request format
 */
var PncerRequestBody = /** @class */ (function (_super) {
    __extends(PncerRequestBody, _super);
    function PncerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "certificateParameters" }),
        (0, class_transformer_1.Type)(function () { return PncerRequestBodyCertificateParameters; }),
        __metadata("design:type", PncerRequestBodyCertificateParameters)
    ], PncerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "consentArtifact" }),
        (0, class_transformer_1.Type)(function () { return shared.ConsentArtifactSchema; }),
        __metadata("design:type", shared.ConsentArtifactSchema)
    ], PncerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "format" }),
        __metadata("design:type", String)
    ], PncerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "txnId" }),
        __metadata("design:type", String)
    ], PncerRequestBody.prototype, "txnId", void 0);
    return PncerRequestBody;
}(utils_1.SpeakeasyBase));
exports.PncerRequestBody = PncerRequestBody;
var Pncer504ApplicationJSONErrorEnum;
(function (Pncer504ApplicationJSONErrorEnum) {
    Pncer504ApplicationJSONErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pncer504ApplicationJSONErrorEnum = exports.Pncer504ApplicationJSONErrorEnum || (exports.Pncer504ApplicationJSONErrorEnum = {}));
var Pncer504ApplicationJSONErrorDescriptionEnum;
(function (Pncer504ApplicationJSONErrorDescriptionEnum) {
    Pncer504ApplicationJSONErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pncer504ApplicationJSONErrorDescriptionEnum = exports.Pncer504ApplicationJSONErrorDescriptionEnum || (exports.Pncer504ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Gateway timeout
 */
var Pncer504ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pncer504ApplicationJSON, _super);
    function Pncer504ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pncer504ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pncer504ApplicationJSON.prototype, "errorDescription", void 0);
    return Pncer504ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pncer504ApplicationJSON = Pncer504ApplicationJSON;
var Pncer503ApplicationJSONErrorEnum;
(function (Pncer503ApplicationJSONErrorEnum) {
    Pncer503ApplicationJSONErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pncer503ApplicationJSONErrorEnum = exports.Pncer503ApplicationJSONErrorEnum || (exports.Pncer503ApplicationJSONErrorEnum = {}));
var Pncer503ApplicationJSONErrorDescriptionEnum;
(function (Pncer503ApplicationJSONErrorDescriptionEnum) {
    Pncer503ApplicationJSONErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pncer503ApplicationJSONErrorDescriptionEnum = exports.Pncer503ApplicationJSONErrorDescriptionEnum || (exports.Pncer503ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Service unavailable
 */
var Pncer503ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pncer503ApplicationJSON, _super);
    function Pncer503ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pncer503ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pncer503ApplicationJSON.prototype, "errorDescription", void 0);
    return Pncer503ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pncer503ApplicationJSON = Pncer503ApplicationJSON;
var Pncer502ApplicationJSONErrorEnum;
(function (Pncer502ApplicationJSONErrorEnum) {
    Pncer502ApplicationJSONErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pncer502ApplicationJSONErrorEnum = exports.Pncer502ApplicationJSONErrorEnum || (exports.Pncer502ApplicationJSONErrorEnum = {}));
var Pncer502ApplicationJSONErrorDescriptionEnum;
(function (Pncer502ApplicationJSONErrorDescriptionEnum) {
    Pncer502ApplicationJSONErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pncer502ApplicationJSONErrorDescriptionEnum = exports.Pncer502ApplicationJSONErrorDescriptionEnum || (exports.Pncer502ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Bad gateway
 */
var Pncer502ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pncer502ApplicationJSON, _super);
    function Pncer502ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pncer502ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pncer502ApplicationJSON.prototype, "errorDescription", void 0);
    return Pncer502ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pncer502ApplicationJSON = Pncer502ApplicationJSON;
var Pncer500ApplicationJSONErrorEnum;
(function (Pncer500ApplicationJSONErrorEnum) {
    Pncer500ApplicationJSONErrorEnum["InternalServerError"] = "internal_server_error";
})(Pncer500ApplicationJSONErrorEnum = exports.Pncer500ApplicationJSONErrorEnum || (exports.Pncer500ApplicationJSONErrorEnum = {}));
var Pncer500ApplicationJSONErrorDescriptionEnum;
(function (Pncer500ApplicationJSONErrorDescriptionEnum) {
    Pncer500ApplicationJSONErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pncer500ApplicationJSONErrorDescriptionEnum = exports.Pncer500ApplicationJSONErrorDescriptionEnum || (exports.Pncer500ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Internal server error
 */
var Pncer500ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pncer500ApplicationJSON, _super);
    function Pncer500ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pncer500ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pncer500ApplicationJSON.prototype, "errorDescription", void 0);
    return Pncer500ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pncer500ApplicationJSON = Pncer500ApplicationJSON;
var Pncer404ApplicationJSONErrorEnum;
(function (Pncer404ApplicationJSONErrorEnum) {
    Pncer404ApplicationJSONErrorEnum["RecordNotFound"] = "record_not_found";
    Pncer404ApplicationJSONErrorEnum["UrlNotFound"] = "url_not_found";
})(Pncer404ApplicationJSONErrorEnum = exports.Pncer404ApplicationJSONErrorEnum || (exports.Pncer404ApplicationJSONErrorEnum = {}));
var Pncer404ApplicationJSONErrorDescriptionEnum;
(function (Pncer404ApplicationJSONErrorDescriptionEnum) {
    Pncer404ApplicationJSONErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pncer404ApplicationJSONErrorDescriptionEnum["YourAPIUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pncer404ApplicationJSONErrorDescriptionEnum = exports.Pncer404ApplicationJSONErrorDescriptionEnum || (exports.Pncer404ApplicationJSONErrorDescriptionEnum = {}));
/**
 * No record found
 */
var Pncer404ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pncer404ApplicationJSON, _super);
    function Pncer404ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pncer404ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pncer404ApplicationJSON.prototype, "errorDescription", void 0);
    return Pncer404ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pncer404ApplicationJSON = Pncer404ApplicationJSON;
var Pncer401ApplicationJSONErrorEnum;
(function (Pncer401ApplicationJSONErrorEnum) {
    Pncer401ApplicationJSONErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pncer401ApplicationJSONErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pncer401ApplicationJSONErrorEnum = exports.Pncer401ApplicationJSONErrorEnum || (exports.Pncer401ApplicationJSONErrorEnum = {}));
var Pncer401ApplicationJSONErrorDescriptionEnum;
(function (Pncer401ApplicationJSONErrorDescriptionEnum) {
    Pncer401ApplicationJSONErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pncer401ApplicationJSONErrorDescriptionEnum["YouAreNotAuthorizedToUseThisAPI"] = "You are not authorized to use this API";
})(Pncer401ApplicationJSONErrorDescriptionEnum = exports.Pncer401ApplicationJSONErrorDescriptionEnum || (exports.Pncer401ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Unauthorized access
 */
var Pncer401ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pncer401ApplicationJSON, _super);
    function Pncer401ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pncer401ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pncer401ApplicationJSON.prototype, "errorDescription", void 0);
    return Pncer401ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pncer401ApplicationJSON = Pncer401ApplicationJSON;
var Pncer400ApplicationJSONErrorEnum;
(function (Pncer400ApplicationJSONErrorEnum) {
    Pncer400ApplicationJSONErrorEnum["MissingParameter"] = "missing_parameter";
    Pncer400ApplicationJSONErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pncer400ApplicationJSONErrorEnum["InvalidFormat"] = "invalid_format";
    Pncer400ApplicationJSONErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pncer400ApplicationJSONErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pncer400ApplicationJSONErrorEnum = exports.Pncer400ApplicationJSONErrorEnum || (exports.Pncer400ApplicationJSONErrorEnum = {}));
var Pncer400ApplicationJSONErrorDescriptionEnum;
(function (Pncer400ApplicationJSONErrorDescriptionEnum) {
    Pncer400ApplicationJSONErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pncer400ApplicationJSONErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pncer400ApplicationJSONErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pncer400ApplicationJSONErrorDescriptionEnum["TheTxnIdParameterMustBeInUUIDFormat"] = "The txnId parameter must be in UUID format";
    Pncer400ApplicationJSONErrorDescriptionEnum["TheConsentIdParameterMustBeInUUIDFormat"] = "The consentId parameter must be in UUID format";
})(Pncer400ApplicationJSONErrorDescriptionEnum = exports.Pncer400ApplicationJSONErrorDescriptionEnum || (exports.Pncer400ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Bad request
 */
var Pncer400ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pncer400ApplicationJSON, _super);
    function Pncer400ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pncer400ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pncer400ApplicationJSON.prototype, "errorDescription", void 0);
    return Pncer400ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pncer400ApplicationJSON = Pncer400ApplicationJSON;
var PncerResponse = /** @class */ (function (_super) {
    __extends(PncerResponse, _super);
    function PncerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PncerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PncerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PncerResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pncer400ApplicationJSON)
    ], PncerResponse.prototype, "pncer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pncer401ApplicationJSON)
    ], PncerResponse.prototype, "pncer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pncer404ApplicationJSON)
    ], PncerResponse.prototype, "pncer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pncer500ApplicationJSON)
    ], PncerResponse.prototype, "pncer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pncer502ApplicationJSON)
    ], PncerResponse.prototype, "pncer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pncer503ApplicationJSON)
    ], PncerResponse.prototype, "pncer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pncer504ApplicationJSON)
    ], PncerResponse.prototype, "pncer504ApplicationJSONObject", void 0);
    return PncerResponse;
}(utils_1.SpeakeasyBase));
exports.PncerResponse = PncerResponse;
