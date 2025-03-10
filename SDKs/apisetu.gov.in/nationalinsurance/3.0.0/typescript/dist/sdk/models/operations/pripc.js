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
exports.PripcResponse = exports.Pripc400ApplicationJSON = exports.Pripc400ApplicationJSONErrorDescriptionEnum = exports.Pripc400ApplicationJSONErrorEnum = exports.Pripc401ApplicationJSON = exports.Pripc401ApplicationJSONErrorDescriptionEnum = exports.Pripc401ApplicationJSONErrorEnum = exports.Pripc404ApplicationJSON = exports.Pripc404ApplicationJSONErrorDescriptionEnum = exports.Pripc404ApplicationJSONErrorEnum = exports.Pripc500ApplicationJSON = exports.Pripc500ApplicationJSONErrorDescriptionEnum = exports.Pripc500ApplicationJSONErrorEnum = exports.Pripc502ApplicationJSON = exports.Pripc502ApplicationJSONErrorDescriptionEnum = exports.Pripc502ApplicationJSONErrorEnum = exports.Pripc503ApplicationJSON = exports.Pripc503ApplicationJSONErrorDescriptionEnum = exports.Pripc503ApplicationJSONErrorEnum = exports.Pripc504ApplicationJSON = exports.Pripc504ApplicationJSONErrorDescriptionEnum = exports.Pripc504ApplicationJSONErrorEnum = exports.PripcRequestBody = exports.PripcRequestBodyFormatEnum = exports.PripcRequestBodyCertificateParameters = exports.PripcSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
var PripcSecurity = /** @class */ (function (_super) {
    __extends(PripcSecurity, _super);
    function PripcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-APIKEY",
        }),
        __metadata("design:type", String)
    ], PripcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-CLIENTID",
        }),
        __metadata("design:type", String)
    ], PripcSecurity.prototype, "clientId", void 0);
    return PripcSecurity;
}(utils_1.SpeakeasyBase));
exports.PripcSecurity = PripcSecurity;
var PripcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PripcRequestBodyCertificateParameters, _super);
    function PripcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customer_Id" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "customerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "policy_Number" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "policyNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "policy_StartDate" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "policyStartDate", void 0);
    return PripcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PripcRequestBodyCertificateParameters = PripcRequestBodyCertificateParameters;
/**
 * The format of the certificate in response.
 */
var PripcRequestBodyFormatEnum;
(function (PripcRequestBodyFormatEnum) {
    PripcRequestBodyFormatEnum["Pdf"] = "pdf";
})(PripcRequestBodyFormatEnum = exports.PripcRequestBodyFormatEnum || (exports.PripcRequestBodyFormatEnum = {}));
/**
 * Request format
 */
var PripcRequestBody = /** @class */ (function (_super) {
    __extends(PripcRequestBody, _super);
    function PripcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "certificateParameters" }),
        (0, class_transformer_1.Type)(function () { return PripcRequestBodyCertificateParameters; }),
        __metadata("design:type", PripcRequestBodyCertificateParameters)
    ], PripcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "consentArtifact" }),
        (0, class_transformer_1.Type)(function () { return shared.ConsentArtifactSchema; }),
        __metadata("design:type", shared.ConsentArtifactSchema)
    ], PripcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "format" }),
        __metadata("design:type", String)
    ], PripcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "txnId" }),
        __metadata("design:type", String)
    ], PripcRequestBody.prototype, "txnId", void 0);
    return PripcRequestBody;
}(utils_1.SpeakeasyBase));
exports.PripcRequestBody = PripcRequestBody;
var Pripc504ApplicationJSONErrorEnum;
(function (Pripc504ApplicationJSONErrorEnum) {
    Pripc504ApplicationJSONErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pripc504ApplicationJSONErrorEnum = exports.Pripc504ApplicationJSONErrorEnum || (exports.Pripc504ApplicationJSONErrorEnum = {}));
var Pripc504ApplicationJSONErrorDescriptionEnum;
(function (Pripc504ApplicationJSONErrorDescriptionEnum) {
    Pripc504ApplicationJSONErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pripc504ApplicationJSONErrorDescriptionEnum = exports.Pripc504ApplicationJSONErrorDescriptionEnum || (exports.Pripc504ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Gateway timeout
 */
var Pripc504ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pripc504ApplicationJSON, _super);
    function Pripc504ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pripc504ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pripc504ApplicationJSON.prototype, "errorDescription", void 0);
    return Pripc504ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pripc504ApplicationJSON = Pripc504ApplicationJSON;
var Pripc503ApplicationJSONErrorEnum;
(function (Pripc503ApplicationJSONErrorEnum) {
    Pripc503ApplicationJSONErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pripc503ApplicationJSONErrorEnum = exports.Pripc503ApplicationJSONErrorEnum || (exports.Pripc503ApplicationJSONErrorEnum = {}));
var Pripc503ApplicationJSONErrorDescriptionEnum;
(function (Pripc503ApplicationJSONErrorDescriptionEnum) {
    Pripc503ApplicationJSONErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pripc503ApplicationJSONErrorDescriptionEnum = exports.Pripc503ApplicationJSONErrorDescriptionEnum || (exports.Pripc503ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Service unavailable
 */
var Pripc503ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pripc503ApplicationJSON, _super);
    function Pripc503ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pripc503ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pripc503ApplicationJSON.prototype, "errorDescription", void 0);
    return Pripc503ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pripc503ApplicationJSON = Pripc503ApplicationJSON;
var Pripc502ApplicationJSONErrorEnum;
(function (Pripc502ApplicationJSONErrorEnum) {
    Pripc502ApplicationJSONErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pripc502ApplicationJSONErrorEnum = exports.Pripc502ApplicationJSONErrorEnum || (exports.Pripc502ApplicationJSONErrorEnum = {}));
var Pripc502ApplicationJSONErrorDescriptionEnum;
(function (Pripc502ApplicationJSONErrorDescriptionEnum) {
    Pripc502ApplicationJSONErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pripc502ApplicationJSONErrorDescriptionEnum = exports.Pripc502ApplicationJSONErrorDescriptionEnum || (exports.Pripc502ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Bad gateway
 */
var Pripc502ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pripc502ApplicationJSON, _super);
    function Pripc502ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pripc502ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pripc502ApplicationJSON.prototype, "errorDescription", void 0);
    return Pripc502ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pripc502ApplicationJSON = Pripc502ApplicationJSON;
var Pripc500ApplicationJSONErrorEnum;
(function (Pripc500ApplicationJSONErrorEnum) {
    Pripc500ApplicationJSONErrorEnum["InternalServerError"] = "internal_server_error";
})(Pripc500ApplicationJSONErrorEnum = exports.Pripc500ApplicationJSONErrorEnum || (exports.Pripc500ApplicationJSONErrorEnum = {}));
var Pripc500ApplicationJSONErrorDescriptionEnum;
(function (Pripc500ApplicationJSONErrorDescriptionEnum) {
    Pripc500ApplicationJSONErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pripc500ApplicationJSONErrorDescriptionEnum = exports.Pripc500ApplicationJSONErrorDescriptionEnum || (exports.Pripc500ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Internal server error
 */
var Pripc500ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pripc500ApplicationJSON, _super);
    function Pripc500ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pripc500ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pripc500ApplicationJSON.prototype, "errorDescription", void 0);
    return Pripc500ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pripc500ApplicationJSON = Pripc500ApplicationJSON;
var Pripc404ApplicationJSONErrorEnum;
(function (Pripc404ApplicationJSONErrorEnum) {
    Pripc404ApplicationJSONErrorEnum["RecordNotFound"] = "record_not_found";
    Pripc404ApplicationJSONErrorEnum["UrlNotFound"] = "url_not_found";
})(Pripc404ApplicationJSONErrorEnum = exports.Pripc404ApplicationJSONErrorEnum || (exports.Pripc404ApplicationJSONErrorEnum = {}));
var Pripc404ApplicationJSONErrorDescriptionEnum;
(function (Pripc404ApplicationJSONErrorDescriptionEnum) {
    Pripc404ApplicationJSONErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pripc404ApplicationJSONErrorDescriptionEnum["YourAPIUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pripc404ApplicationJSONErrorDescriptionEnum = exports.Pripc404ApplicationJSONErrorDescriptionEnum || (exports.Pripc404ApplicationJSONErrorDescriptionEnum = {}));
/**
 * No record found
 */
var Pripc404ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pripc404ApplicationJSON, _super);
    function Pripc404ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pripc404ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pripc404ApplicationJSON.prototype, "errorDescription", void 0);
    return Pripc404ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pripc404ApplicationJSON = Pripc404ApplicationJSON;
var Pripc401ApplicationJSONErrorEnum;
(function (Pripc401ApplicationJSONErrorEnum) {
    Pripc401ApplicationJSONErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pripc401ApplicationJSONErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pripc401ApplicationJSONErrorEnum = exports.Pripc401ApplicationJSONErrorEnum || (exports.Pripc401ApplicationJSONErrorEnum = {}));
var Pripc401ApplicationJSONErrorDescriptionEnum;
(function (Pripc401ApplicationJSONErrorDescriptionEnum) {
    Pripc401ApplicationJSONErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pripc401ApplicationJSONErrorDescriptionEnum["YouAreNotAuthorizedToUseThisAPI"] = "You are not authorized to use this API";
})(Pripc401ApplicationJSONErrorDescriptionEnum = exports.Pripc401ApplicationJSONErrorDescriptionEnum || (exports.Pripc401ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Unauthorized access
 */
var Pripc401ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pripc401ApplicationJSON, _super);
    function Pripc401ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pripc401ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pripc401ApplicationJSON.prototype, "errorDescription", void 0);
    return Pripc401ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pripc401ApplicationJSON = Pripc401ApplicationJSON;
var Pripc400ApplicationJSONErrorEnum;
(function (Pripc400ApplicationJSONErrorEnum) {
    Pripc400ApplicationJSONErrorEnum["MissingParameter"] = "missing_parameter";
    Pripc400ApplicationJSONErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pripc400ApplicationJSONErrorEnum["InvalidFormat"] = "invalid_format";
    Pripc400ApplicationJSONErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pripc400ApplicationJSONErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pripc400ApplicationJSONErrorEnum = exports.Pripc400ApplicationJSONErrorEnum || (exports.Pripc400ApplicationJSONErrorEnum = {}));
var Pripc400ApplicationJSONErrorDescriptionEnum;
(function (Pripc400ApplicationJSONErrorDescriptionEnum) {
    Pripc400ApplicationJSONErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pripc400ApplicationJSONErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pripc400ApplicationJSONErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pripc400ApplicationJSONErrorDescriptionEnum["TheTxnIdParameterMustBeInUUIDFormat"] = "The txnId parameter must be in UUID format";
    Pripc400ApplicationJSONErrorDescriptionEnum["TheConsentIdParameterMustBeInUUIDFormat"] = "The consentId parameter must be in UUID format";
})(Pripc400ApplicationJSONErrorDescriptionEnum = exports.Pripc400ApplicationJSONErrorDescriptionEnum || (exports.Pripc400ApplicationJSONErrorDescriptionEnum = {}));
/**
 * Bad request
 */
var Pripc400ApplicationJSON = /** @class */ (function (_super) {
    __extends(Pripc400ApplicationJSON, _super);
    function Pripc400ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        __metadata("design:type", String)
    ], Pripc400ApplicationJSON.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errorDescription" }),
        __metadata("design:type", String)
    ], Pripc400ApplicationJSON.prototype, "errorDescription", void 0);
    return Pripc400ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.Pripc400ApplicationJSON = Pripc400ApplicationJSON;
var PripcResponse = /** @class */ (function (_super) {
    __extends(PripcResponse, _super);
    function PripcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PripcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PripcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PripcResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc400ApplicationJSON)
    ], PripcResponse.prototype, "pripc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc401ApplicationJSON)
    ], PripcResponse.prototype, "pripc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc404ApplicationJSON)
    ], PripcResponse.prototype, "pripc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc500ApplicationJSON)
    ], PripcResponse.prototype, "pripc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc502ApplicationJSON)
    ], PripcResponse.prototype, "pripc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc503ApplicationJSON)
    ], PripcResponse.prototype, "pripc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc504ApplicationJSON)
    ], PripcResponse.prototype, "pripc504ApplicationJSONObject", void 0);
    return PripcResponse;
}(utils_1.SpeakeasyBase));
exports.PripcResponse = PripcResponse;
