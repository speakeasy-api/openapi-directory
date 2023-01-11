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
exports.RfcerResponse = exports.RfcerRequest = exports.Rfcer504ApplicationJson = exports.Rfcer504ApplicationJsonErrorDescriptionEnum = exports.Rfcer504ApplicationJsonErrorEnum = exports.Rfcer503ApplicationJson = exports.Rfcer503ApplicationJsonErrorDescriptionEnum = exports.Rfcer503ApplicationJsonErrorEnum = exports.Rfcer502ApplicationJson = exports.Rfcer502ApplicationJsonErrorDescriptionEnum = exports.Rfcer502ApplicationJsonErrorEnum = exports.Rfcer500ApplicationJson = exports.Rfcer500ApplicationJsonErrorDescriptionEnum = exports.Rfcer500ApplicationJsonErrorEnum = exports.Rfcer404ApplicationJson = exports.Rfcer404ApplicationJsonErrorDescriptionEnum = exports.Rfcer404ApplicationJsonErrorEnum = exports.Rfcer401ApplicationJson = exports.Rfcer401ApplicationJsonErrorDescriptionEnum = exports.Rfcer401ApplicationJsonErrorEnum = exports.Rfcer400ApplicationJson = exports.Rfcer400ApplicationJsonErrorDescriptionEnum = exports.Rfcer400ApplicationJsonErrorEnum = exports.RfcerSecurity = exports.RfcerRequestBody = exports.RfcerRequestBodyFormatEnum = exports.RfcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RfcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RfcerRequestBodyCertificateParameters, _super);
    function RfcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cert_type" }),
        __metadata("design:type", String)
    ], RfcerRequestBodyCertificateParameters.prototype, "certType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], RfcerRequestBodyCertificateParameters.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], RfcerRequestBodyCertificateParameters.prototype, "regNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sector" }),
        __metadata("design:type", String)
    ], RfcerRequestBodyCertificateParameters.prototype, "sector", void 0);
    return RfcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RfcerRequestBodyCertificateParameters = RfcerRequestBodyCertificateParameters;
var RfcerRequestBodyFormatEnum;
(function (RfcerRequestBodyFormatEnum) {
    RfcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RfcerRequestBodyFormatEnum = exports.RfcerRequestBodyFormatEnum || (exports.RfcerRequestBodyFormatEnum = {}));
var RfcerRequestBody = /** @class */ (function (_super) {
    __extends(RfcerRequestBody, _super);
    function RfcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RfcerRequestBodyCertificateParameters)
    ], RfcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RfcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RfcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RfcerRequestBody.prototype, "txnId", void 0);
    return RfcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RfcerRequestBody = RfcerRequestBody;
var RfcerSecurity = /** @class */ (function (_super) {
    __extends(RfcerSecurity, _super);
    function RfcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RfcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RfcerSecurity.prototype, "clientId", void 0);
    return RfcerSecurity;
}(utils_1.SpeakeasyBase));
exports.RfcerSecurity = RfcerSecurity;
var Rfcer400ApplicationJsonErrorEnum;
(function (Rfcer400ApplicationJsonErrorEnum) {
    Rfcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rfcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rfcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rfcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rfcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rfcer400ApplicationJsonErrorEnum = exports.Rfcer400ApplicationJsonErrorEnum || (exports.Rfcer400ApplicationJsonErrorEnum = {}));
var Rfcer400ApplicationJsonErrorDescriptionEnum;
(function (Rfcer400ApplicationJsonErrorDescriptionEnum) {
    Rfcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rfcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rfcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rfcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rfcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rfcer400ApplicationJsonErrorDescriptionEnum = exports.Rfcer400ApplicationJsonErrorDescriptionEnum || (exports.Rfcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rfcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rfcer400ApplicationJson, _super);
    function Rfcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rfcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rfcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rfcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rfcer400ApplicationJson = Rfcer400ApplicationJson;
var Rfcer401ApplicationJsonErrorEnum;
(function (Rfcer401ApplicationJsonErrorEnum) {
    Rfcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rfcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rfcer401ApplicationJsonErrorEnum = exports.Rfcer401ApplicationJsonErrorEnum || (exports.Rfcer401ApplicationJsonErrorEnum = {}));
var Rfcer401ApplicationJsonErrorDescriptionEnum;
(function (Rfcer401ApplicationJsonErrorDescriptionEnum) {
    Rfcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rfcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rfcer401ApplicationJsonErrorDescriptionEnum = exports.Rfcer401ApplicationJsonErrorDescriptionEnum || (exports.Rfcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rfcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rfcer401ApplicationJson, _super);
    function Rfcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rfcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rfcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rfcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rfcer401ApplicationJson = Rfcer401ApplicationJson;
var Rfcer404ApplicationJsonErrorEnum;
(function (Rfcer404ApplicationJsonErrorEnum) {
    Rfcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rfcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rfcer404ApplicationJsonErrorEnum = exports.Rfcer404ApplicationJsonErrorEnum || (exports.Rfcer404ApplicationJsonErrorEnum = {}));
var Rfcer404ApplicationJsonErrorDescriptionEnum;
(function (Rfcer404ApplicationJsonErrorDescriptionEnum) {
    Rfcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rfcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rfcer404ApplicationJsonErrorDescriptionEnum = exports.Rfcer404ApplicationJsonErrorDescriptionEnum || (exports.Rfcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rfcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rfcer404ApplicationJson, _super);
    function Rfcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rfcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rfcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rfcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rfcer404ApplicationJson = Rfcer404ApplicationJson;
var Rfcer500ApplicationJsonErrorEnum;
(function (Rfcer500ApplicationJsonErrorEnum) {
    Rfcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rfcer500ApplicationJsonErrorEnum = exports.Rfcer500ApplicationJsonErrorEnum || (exports.Rfcer500ApplicationJsonErrorEnum = {}));
var Rfcer500ApplicationJsonErrorDescriptionEnum;
(function (Rfcer500ApplicationJsonErrorDescriptionEnum) {
    Rfcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rfcer500ApplicationJsonErrorDescriptionEnum = exports.Rfcer500ApplicationJsonErrorDescriptionEnum || (exports.Rfcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rfcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rfcer500ApplicationJson, _super);
    function Rfcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rfcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rfcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rfcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rfcer500ApplicationJson = Rfcer500ApplicationJson;
var Rfcer502ApplicationJsonErrorEnum;
(function (Rfcer502ApplicationJsonErrorEnum) {
    Rfcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rfcer502ApplicationJsonErrorEnum = exports.Rfcer502ApplicationJsonErrorEnum || (exports.Rfcer502ApplicationJsonErrorEnum = {}));
var Rfcer502ApplicationJsonErrorDescriptionEnum;
(function (Rfcer502ApplicationJsonErrorDescriptionEnum) {
    Rfcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rfcer502ApplicationJsonErrorDescriptionEnum = exports.Rfcer502ApplicationJsonErrorDescriptionEnum || (exports.Rfcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rfcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rfcer502ApplicationJson, _super);
    function Rfcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rfcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rfcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rfcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rfcer502ApplicationJson = Rfcer502ApplicationJson;
var Rfcer503ApplicationJsonErrorEnum;
(function (Rfcer503ApplicationJsonErrorEnum) {
    Rfcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rfcer503ApplicationJsonErrorEnum = exports.Rfcer503ApplicationJsonErrorEnum || (exports.Rfcer503ApplicationJsonErrorEnum = {}));
var Rfcer503ApplicationJsonErrorDescriptionEnum;
(function (Rfcer503ApplicationJsonErrorDescriptionEnum) {
    Rfcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rfcer503ApplicationJsonErrorDescriptionEnum = exports.Rfcer503ApplicationJsonErrorDescriptionEnum || (exports.Rfcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rfcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rfcer503ApplicationJson, _super);
    function Rfcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rfcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rfcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rfcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rfcer503ApplicationJson = Rfcer503ApplicationJson;
var Rfcer504ApplicationJsonErrorEnum;
(function (Rfcer504ApplicationJsonErrorEnum) {
    Rfcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rfcer504ApplicationJsonErrorEnum = exports.Rfcer504ApplicationJsonErrorEnum || (exports.Rfcer504ApplicationJsonErrorEnum = {}));
var Rfcer504ApplicationJsonErrorDescriptionEnum;
(function (Rfcer504ApplicationJsonErrorDescriptionEnum) {
    Rfcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rfcer504ApplicationJsonErrorDescriptionEnum = exports.Rfcer504ApplicationJsonErrorDescriptionEnum || (exports.Rfcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rfcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rfcer504ApplicationJson, _super);
    function Rfcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rfcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rfcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rfcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rfcer504ApplicationJson = Rfcer504ApplicationJson;
var RfcerRequest = /** @class */ (function (_super) {
    __extends(RfcerRequest, _super);
    function RfcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RfcerRequestBody)
    ], RfcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RfcerSecurity)
    ], RfcerRequest.prototype, "security", void 0);
    return RfcerRequest;
}(utils_1.SpeakeasyBase));
exports.RfcerRequest = RfcerRequest;
var RfcerResponse = /** @class */ (function (_super) {
    __extends(RfcerResponse, _super);
    function RfcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RfcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RfcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rfcer400ApplicationJson)
    ], RfcerResponse.prototype, "rfcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rfcer401ApplicationJson)
    ], RfcerResponse.prototype, "rfcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rfcer404ApplicationJson)
    ], RfcerResponse.prototype, "rfcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rfcer500ApplicationJson)
    ], RfcerResponse.prototype, "rfcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rfcer502ApplicationJson)
    ], RfcerResponse.prototype, "rfcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rfcer503ApplicationJson)
    ], RfcerResponse.prototype, "rfcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rfcer504ApplicationJson)
    ], RfcerResponse.prototype, "rfcer504ApplicationJSONObject", void 0);
    return RfcerResponse;
}(utils_1.SpeakeasyBase));
exports.RfcerResponse = RfcerResponse;
