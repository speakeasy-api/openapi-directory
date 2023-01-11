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
exports.TdcerResponse = exports.TdcerRequest = exports.Tdcer504ApplicationJson = exports.Tdcer504ApplicationJsonErrorDescriptionEnum = exports.Tdcer504ApplicationJsonErrorEnum = exports.Tdcer503ApplicationJson = exports.Tdcer503ApplicationJsonErrorDescriptionEnum = exports.Tdcer503ApplicationJsonErrorEnum = exports.Tdcer502ApplicationJson = exports.Tdcer502ApplicationJsonErrorDescriptionEnum = exports.Tdcer502ApplicationJsonErrorEnum = exports.Tdcer500ApplicationJson = exports.Tdcer500ApplicationJsonErrorDescriptionEnum = exports.Tdcer500ApplicationJsonErrorEnum = exports.Tdcer404ApplicationJson = exports.Tdcer404ApplicationJsonErrorDescriptionEnum = exports.Tdcer404ApplicationJsonErrorEnum = exports.Tdcer401ApplicationJson = exports.Tdcer401ApplicationJsonErrorDescriptionEnum = exports.Tdcer401ApplicationJsonErrorEnum = exports.Tdcer400ApplicationJson = exports.Tdcer400ApplicationJsonErrorDescriptionEnum = exports.Tdcer400ApplicationJsonErrorEnum = exports.TdcerSecurity = exports.TdcerRequestBody = exports.TdcerRequestBodyFormatEnum = exports.TdcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TdcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TdcerRequestBodyCertificateParameters, _super);
    function TdcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustID" }),
        __metadata("design:type", String)
    ], TdcerRequestBodyCertificateParameters.prototype, "custID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], TdcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finYr" }),
        __metadata("design:type", String)
    ], TdcerRequestBodyCertificateParameters.prototype, "finYr", void 0);
    return TdcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.TdcerRequestBodyCertificateParameters = TdcerRequestBodyCertificateParameters;
var TdcerRequestBodyFormatEnum;
(function (TdcerRequestBodyFormatEnum) {
    TdcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(TdcerRequestBodyFormatEnum = exports.TdcerRequestBodyFormatEnum || (exports.TdcerRequestBodyFormatEnum = {}));
var TdcerRequestBody = /** @class */ (function (_super) {
    __extends(TdcerRequestBody, _super);
    function TdcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TdcerRequestBodyCertificateParameters)
    ], TdcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TdcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TdcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TdcerRequestBody.prototype, "txnId", void 0);
    return TdcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.TdcerRequestBody = TdcerRequestBody;
var TdcerSecurity = /** @class */ (function (_super) {
    __extends(TdcerSecurity, _super);
    function TdcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TdcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TdcerSecurity.prototype, "clientId", void 0);
    return TdcerSecurity;
}(utils_1.SpeakeasyBase));
exports.TdcerSecurity = TdcerSecurity;
var Tdcer400ApplicationJsonErrorEnum;
(function (Tdcer400ApplicationJsonErrorEnum) {
    Tdcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tdcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tdcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tdcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tdcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tdcer400ApplicationJsonErrorEnum = exports.Tdcer400ApplicationJsonErrorEnum || (exports.Tdcer400ApplicationJsonErrorEnum = {}));
var Tdcer400ApplicationJsonErrorDescriptionEnum;
(function (Tdcer400ApplicationJsonErrorDescriptionEnum) {
    Tdcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tdcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tdcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tdcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tdcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tdcer400ApplicationJsonErrorDescriptionEnum = exports.Tdcer400ApplicationJsonErrorDescriptionEnum || (exports.Tdcer400ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer400ApplicationJson, _super);
    function Tdcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tdcer400ApplicationJson = Tdcer400ApplicationJson;
var Tdcer401ApplicationJsonErrorEnum;
(function (Tdcer401ApplicationJsonErrorEnum) {
    Tdcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tdcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tdcer401ApplicationJsonErrorEnum = exports.Tdcer401ApplicationJsonErrorEnum || (exports.Tdcer401ApplicationJsonErrorEnum = {}));
var Tdcer401ApplicationJsonErrorDescriptionEnum;
(function (Tdcer401ApplicationJsonErrorDescriptionEnum) {
    Tdcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tdcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tdcer401ApplicationJsonErrorDescriptionEnum = exports.Tdcer401ApplicationJsonErrorDescriptionEnum || (exports.Tdcer401ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer401ApplicationJson, _super);
    function Tdcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tdcer401ApplicationJson = Tdcer401ApplicationJson;
var Tdcer404ApplicationJsonErrorEnum;
(function (Tdcer404ApplicationJsonErrorEnum) {
    Tdcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tdcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tdcer404ApplicationJsonErrorEnum = exports.Tdcer404ApplicationJsonErrorEnum || (exports.Tdcer404ApplicationJsonErrorEnum = {}));
var Tdcer404ApplicationJsonErrorDescriptionEnum;
(function (Tdcer404ApplicationJsonErrorDescriptionEnum) {
    Tdcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tdcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tdcer404ApplicationJsonErrorDescriptionEnum = exports.Tdcer404ApplicationJsonErrorDescriptionEnum || (exports.Tdcer404ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer404ApplicationJson, _super);
    function Tdcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tdcer404ApplicationJson = Tdcer404ApplicationJson;
var Tdcer500ApplicationJsonErrorEnum;
(function (Tdcer500ApplicationJsonErrorEnum) {
    Tdcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tdcer500ApplicationJsonErrorEnum = exports.Tdcer500ApplicationJsonErrorEnum || (exports.Tdcer500ApplicationJsonErrorEnum = {}));
var Tdcer500ApplicationJsonErrorDescriptionEnum;
(function (Tdcer500ApplicationJsonErrorDescriptionEnum) {
    Tdcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tdcer500ApplicationJsonErrorDescriptionEnum = exports.Tdcer500ApplicationJsonErrorDescriptionEnum || (exports.Tdcer500ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer500ApplicationJson, _super);
    function Tdcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tdcer500ApplicationJson = Tdcer500ApplicationJson;
var Tdcer502ApplicationJsonErrorEnum;
(function (Tdcer502ApplicationJsonErrorEnum) {
    Tdcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tdcer502ApplicationJsonErrorEnum = exports.Tdcer502ApplicationJsonErrorEnum || (exports.Tdcer502ApplicationJsonErrorEnum = {}));
var Tdcer502ApplicationJsonErrorDescriptionEnum;
(function (Tdcer502ApplicationJsonErrorDescriptionEnum) {
    Tdcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tdcer502ApplicationJsonErrorDescriptionEnum = exports.Tdcer502ApplicationJsonErrorDescriptionEnum || (exports.Tdcer502ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer502ApplicationJson, _super);
    function Tdcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tdcer502ApplicationJson = Tdcer502ApplicationJson;
var Tdcer503ApplicationJsonErrorEnum;
(function (Tdcer503ApplicationJsonErrorEnum) {
    Tdcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tdcer503ApplicationJsonErrorEnum = exports.Tdcer503ApplicationJsonErrorEnum || (exports.Tdcer503ApplicationJsonErrorEnum = {}));
var Tdcer503ApplicationJsonErrorDescriptionEnum;
(function (Tdcer503ApplicationJsonErrorDescriptionEnum) {
    Tdcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tdcer503ApplicationJsonErrorDescriptionEnum = exports.Tdcer503ApplicationJsonErrorDescriptionEnum || (exports.Tdcer503ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer503ApplicationJson, _super);
    function Tdcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tdcer503ApplicationJson = Tdcer503ApplicationJson;
var Tdcer504ApplicationJsonErrorEnum;
(function (Tdcer504ApplicationJsonErrorEnum) {
    Tdcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tdcer504ApplicationJsonErrorEnum = exports.Tdcer504ApplicationJsonErrorEnum || (exports.Tdcer504ApplicationJsonErrorEnum = {}));
var Tdcer504ApplicationJsonErrorDescriptionEnum;
(function (Tdcer504ApplicationJsonErrorDescriptionEnum) {
    Tdcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tdcer504ApplicationJsonErrorDescriptionEnum = exports.Tdcer504ApplicationJsonErrorDescriptionEnum || (exports.Tdcer504ApplicationJsonErrorDescriptionEnum = {}));
var Tdcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tdcer504ApplicationJson, _super);
    function Tdcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tdcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tdcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Tdcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tdcer504ApplicationJson = Tdcer504ApplicationJson;
var TdcerRequest = /** @class */ (function (_super) {
    __extends(TdcerRequest, _super);
    function TdcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TdcerRequestBody)
    ], TdcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TdcerSecurity)
    ], TdcerRequest.prototype, "security", void 0);
    return TdcerRequest;
}(utils_1.SpeakeasyBase));
exports.TdcerRequest = TdcerRequest;
var TdcerResponse = /** @class */ (function (_super) {
    __extends(TdcerResponse, _super);
    function TdcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TdcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TdcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tdcer400ApplicationJson)
    ], TdcerResponse.prototype, "tdcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tdcer401ApplicationJson)
    ], TdcerResponse.prototype, "tdcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tdcer404ApplicationJson)
    ], TdcerResponse.prototype, "tdcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tdcer500ApplicationJson)
    ], TdcerResponse.prototype, "tdcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tdcer502ApplicationJson)
    ], TdcerResponse.prototype, "tdcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tdcer503ApplicationJson)
    ], TdcerResponse.prototype, "tdcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tdcer504ApplicationJson)
    ], TdcerResponse.prototype, "tdcer504ApplicationJSONObject", void 0);
    return TdcerResponse;
}(utils_1.SpeakeasyBase));
exports.TdcerResponse = TdcerResponse;
