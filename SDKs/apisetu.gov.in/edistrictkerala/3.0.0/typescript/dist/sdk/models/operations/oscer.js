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
exports.OscerResponse = exports.OscerRequest = exports.Oscer504ApplicationJson = exports.Oscer504ApplicationJsonErrorDescriptionEnum = exports.Oscer504ApplicationJsonErrorEnum = exports.Oscer503ApplicationJson = exports.Oscer503ApplicationJsonErrorDescriptionEnum = exports.Oscer503ApplicationJsonErrorEnum = exports.Oscer502ApplicationJson = exports.Oscer502ApplicationJsonErrorDescriptionEnum = exports.Oscer502ApplicationJsonErrorEnum = exports.Oscer500ApplicationJson = exports.Oscer500ApplicationJsonErrorDescriptionEnum = exports.Oscer500ApplicationJsonErrorEnum = exports.Oscer404ApplicationJson = exports.Oscer404ApplicationJsonErrorDescriptionEnum = exports.Oscer404ApplicationJsonErrorEnum = exports.Oscer401ApplicationJson = exports.Oscer401ApplicationJsonErrorDescriptionEnum = exports.Oscer401ApplicationJsonErrorEnum = exports.Oscer400ApplicationJson = exports.Oscer400ApplicationJsonErrorDescriptionEnum = exports.Oscer400ApplicationJsonErrorEnum = exports.OscerSecurity = exports.OscerRequestBody = exports.OscerRequestBodyFormatEnum = exports.OscerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var OscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(OscerRequestBodyCertificateParameters, _super);
    function OscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], OscerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], OscerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], OscerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return OscerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.OscerRequestBodyCertificateParameters = OscerRequestBodyCertificateParameters;
var OscerRequestBodyFormatEnum;
(function (OscerRequestBodyFormatEnum) {
    OscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(OscerRequestBodyFormatEnum = exports.OscerRequestBodyFormatEnum || (exports.OscerRequestBodyFormatEnum = {}));
var OscerRequestBody = /** @class */ (function (_super) {
    __extends(OscerRequestBody, _super);
    function OscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", OscerRequestBodyCertificateParameters)
    ], OscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], OscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], OscerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], OscerRequestBody.prototype, "txnId", void 0);
    return OscerRequestBody;
}(utils_1.SpeakeasyBase));
exports.OscerRequestBody = OscerRequestBody;
var OscerSecurity = /** @class */ (function (_super) {
    __extends(OscerSecurity, _super);
    function OscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], OscerSecurity.prototype, "clientId", void 0);
    return OscerSecurity;
}(utils_1.SpeakeasyBase));
exports.OscerSecurity = OscerSecurity;
var Oscer400ApplicationJsonErrorEnum;
(function (Oscer400ApplicationJsonErrorEnum) {
    Oscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Oscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Oscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Oscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Oscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Oscer400ApplicationJsonErrorEnum = exports.Oscer400ApplicationJsonErrorEnum || (exports.Oscer400ApplicationJsonErrorEnum = {}));
var Oscer400ApplicationJsonErrorDescriptionEnum;
(function (Oscer400ApplicationJsonErrorDescriptionEnum) {
    Oscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Oscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Oscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Oscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Oscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Oscer400ApplicationJsonErrorDescriptionEnum = exports.Oscer400ApplicationJsonErrorDescriptionEnum || (exports.Oscer400ApplicationJsonErrorDescriptionEnum = {}));
var Oscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer400ApplicationJson, _super);
    function Oscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Oscer400ApplicationJson = Oscer400ApplicationJson;
var Oscer401ApplicationJsonErrorEnum;
(function (Oscer401ApplicationJsonErrorEnum) {
    Oscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Oscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Oscer401ApplicationJsonErrorEnum = exports.Oscer401ApplicationJsonErrorEnum || (exports.Oscer401ApplicationJsonErrorEnum = {}));
var Oscer401ApplicationJsonErrorDescriptionEnum;
(function (Oscer401ApplicationJsonErrorDescriptionEnum) {
    Oscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Oscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Oscer401ApplicationJsonErrorDescriptionEnum = exports.Oscer401ApplicationJsonErrorDescriptionEnum || (exports.Oscer401ApplicationJsonErrorDescriptionEnum = {}));
var Oscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer401ApplicationJson, _super);
    function Oscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Oscer401ApplicationJson = Oscer401ApplicationJson;
var Oscer404ApplicationJsonErrorEnum;
(function (Oscer404ApplicationJsonErrorEnum) {
    Oscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Oscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Oscer404ApplicationJsonErrorEnum = exports.Oscer404ApplicationJsonErrorEnum || (exports.Oscer404ApplicationJsonErrorEnum = {}));
var Oscer404ApplicationJsonErrorDescriptionEnum;
(function (Oscer404ApplicationJsonErrorDescriptionEnum) {
    Oscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Oscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Oscer404ApplicationJsonErrorDescriptionEnum = exports.Oscer404ApplicationJsonErrorDescriptionEnum || (exports.Oscer404ApplicationJsonErrorDescriptionEnum = {}));
var Oscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer404ApplicationJson, _super);
    function Oscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Oscer404ApplicationJson = Oscer404ApplicationJson;
var Oscer500ApplicationJsonErrorEnum;
(function (Oscer500ApplicationJsonErrorEnum) {
    Oscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Oscer500ApplicationJsonErrorEnum = exports.Oscer500ApplicationJsonErrorEnum || (exports.Oscer500ApplicationJsonErrorEnum = {}));
var Oscer500ApplicationJsonErrorDescriptionEnum;
(function (Oscer500ApplicationJsonErrorDescriptionEnum) {
    Oscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Oscer500ApplicationJsonErrorDescriptionEnum = exports.Oscer500ApplicationJsonErrorDescriptionEnum || (exports.Oscer500ApplicationJsonErrorDescriptionEnum = {}));
var Oscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer500ApplicationJson, _super);
    function Oscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Oscer500ApplicationJson = Oscer500ApplicationJson;
var Oscer502ApplicationJsonErrorEnum;
(function (Oscer502ApplicationJsonErrorEnum) {
    Oscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Oscer502ApplicationJsonErrorEnum = exports.Oscer502ApplicationJsonErrorEnum || (exports.Oscer502ApplicationJsonErrorEnum = {}));
var Oscer502ApplicationJsonErrorDescriptionEnum;
(function (Oscer502ApplicationJsonErrorDescriptionEnum) {
    Oscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Oscer502ApplicationJsonErrorDescriptionEnum = exports.Oscer502ApplicationJsonErrorDescriptionEnum || (exports.Oscer502ApplicationJsonErrorDescriptionEnum = {}));
var Oscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer502ApplicationJson, _super);
    function Oscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Oscer502ApplicationJson = Oscer502ApplicationJson;
var Oscer503ApplicationJsonErrorEnum;
(function (Oscer503ApplicationJsonErrorEnum) {
    Oscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Oscer503ApplicationJsonErrorEnum = exports.Oscer503ApplicationJsonErrorEnum || (exports.Oscer503ApplicationJsonErrorEnum = {}));
var Oscer503ApplicationJsonErrorDescriptionEnum;
(function (Oscer503ApplicationJsonErrorDescriptionEnum) {
    Oscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Oscer503ApplicationJsonErrorDescriptionEnum = exports.Oscer503ApplicationJsonErrorDescriptionEnum || (exports.Oscer503ApplicationJsonErrorDescriptionEnum = {}));
var Oscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer503ApplicationJson, _super);
    function Oscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Oscer503ApplicationJson = Oscer503ApplicationJson;
var Oscer504ApplicationJsonErrorEnum;
(function (Oscer504ApplicationJsonErrorEnum) {
    Oscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Oscer504ApplicationJsonErrorEnum = exports.Oscer504ApplicationJsonErrorEnum || (exports.Oscer504ApplicationJsonErrorEnum = {}));
var Oscer504ApplicationJsonErrorDescriptionEnum;
(function (Oscer504ApplicationJsonErrorDescriptionEnum) {
    Oscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Oscer504ApplicationJsonErrorDescriptionEnum = exports.Oscer504ApplicationJsonErrorDescriptionEnum || (exports.Oscer504ApplicationJsonErrorDescriptionEnum = {}));
var Oscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Oscer504ApplicationJson, _super);
    function Oscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Oscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Oscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Oscer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Oscer504ApplicationJson = Oscer504ApplicationJson;
var OscerRequest = /** @class */ (function (_super) {
    __extends(OscerRequest, _super);
    function OscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", OscerRequestBody)
    ], OscerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OscerSecurity)
    ], OscerRequest.prototype, "security", void 0);
    return OscerRequest;
}(utils_1.SpeakeasyBase));
exports.OscerRequest = OscerRequest;
var OscerResponse = /** @class */ (function (_super) {
    __extends(OscerResponse, _super);
    function OscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], OscerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], OscerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Oscer400ApplicationJson)
    ], OscerResponse.prototype, "oscer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Oscer401ApplicationJson)
    ], OscerResponse.prototype, "oscer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Oscer404ApplicationJson)
    ], OscerResponse.prototype, "oscer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Oscer500ApplicationJson)
    ], OscerResponse.prototype, "oscer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Oscer502ApplicationJson)
    ], OscerResponse.prototype, "oscer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Oscer503ApplicationJson)
    ], OscerResponse.prototype, "oscer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Oscer504ApplicationJson)
    ], OscerResponse.prototype, "oscer504ApplicationJSONObject", void 0);
    return OscerResponse;
}(utils_1.SpeakeasyBase));
exports.OscerResponse = OscerResponse;
