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
exports.SscerResponse = exports.SscerRequest = exports.Sscer504ApplicationJson = exports.Sscer504ApplicationJsonErrorDescriptionEnum = exports.Sscer504ApplicationJsonErrorEnum = exports.Sscer503ApplicationJson = exports.Sscer503ApplicationJsonErrorDescriptionEnum = exports.Sscer503ApplicationJsonErrorEnum = exports.Sscer502ApplicationJson = exports.Sscer502ApplicationJsonErrorDescriptionEnum = exports.Sscer502ApplicationJsonErrorEnum = exports.Sscer500ApplicationJson = exports.Sscer500ApplicationJsonErrorDescriptionEnum = exports.Sscer500ApplicationJsonErrorEnum = exports.Sscer404ApplicationJson = exports.Sscer404ApplicationJsonErrorDescriptionEnum = exports.Sscer404ApplicationJsonErrorEnum = exports.Sscer401ApplicationJson = exports.Sscer401ApplicationJsonErrorDescriptionEnum = exports.Sscer401ApplicationJsonErrorEnum = exports.Sscer400ApplicationJson = exports.Sscer400ApplicationJsonErrorDescriptionEnum = exports.Sscer400ApplicationJsonErrorEnum = exports.SscerSecurity = exports.SscerRequestBody = exports.SscerRequestBodyFormatEnum = exports.SscerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SscerRequestBodyCertificateParameters, _super);
    function SscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollcode" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "rollcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], SscerRequestBodyCertificateParameters.prototype, "year", void 0);
    return SscerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SscerRequestBodyCertificateParameters = SscerRequestBodyCertificateParameters;
var SscerRequestBodyFormatEnum;
(function (SscerRequestBodyFormatEnum) {
    SscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SscerRequestBodyFormatEnum = exports.SscerRequestBodyFormatEnum || (exports.SscerRequestBodyFormatEnum = {}));
var SscerRequestBody = /** @class */ (function (_super) {
    __extends(SscerRequestBody, _super);
    function SscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SscerRequestBodyCertificateParameters)
    ], SscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SscerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SscerRequestBody.prototype, "txnId", void 0);
    return SscerRequestBody;
}(utils_1.SpeakeasyBase));
exports.SscerRequestBody = SscerRequestBody;
var SscerSecurity = /** @class */ (function (_super) {
    __extends(SscerSecurity, _super);
    function SscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SscerSecurity.prototype, "clientId", void 0);
    return SscerSecurity;
}(utils_1.SpeakeasyBase));
exports.SscerSecurity = SscerSecurity;
var Sscer400ApplicationJsonErrorEnum;
(function (Sscer400ApplicationJsonErrorEnum) {
    Sscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sscer400ApplicationJsonErrorEnum = exports.Sscer400ApplicationJsonErrorEnum || (exports.Sscer400ApplicationJsonErrorEnum = {}));
var Sscer400ApplicationJsonErrorDescriptionEnum;
(function (Sscer400ApplicationJsonErrorDescriptionEnum) {
    Sscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sscer400ApplicationJsonErrorDescriptionEnum = exports.Sscer400ApplicationJsonErrorDescriptionEnum || (exports.Sscer400ApplicationJsonErrorDescriptionEnum = {}));
var Sscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer400ApplicationJson, _super);
    function Sscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sscer400ApplicationJson = Sscer400ApplicationJson;
var Sscer401ApplicationJsonErrorEnum;
(function (Sscer401ApplicationJsonErrorEnum) {
    Sscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sscer401ApplicationJsonErrorEnum = exports.Sscer401ApplicationJsonErrorEnum || (exports.Sscer401ApplicationJsonErrorEnum = {}));
var Sscer401ApplicationJsonErrorDescriptionEnum;
(function (Sscer401ApplicationJsonErrorDescriptionEnum) {
    Sscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sscer401ApplicationJsonErrorDescriptionEnum = exports.Sscer401ApplicationJsonErrorDescriptionEnum || (exports.Sscer401ApplicationJsonErrorDescriptionEnum = {}));
var Sscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer401ApplicationJson, _super);
    function Sscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sscer401ApplicationJson = Sscer401ApplicationJson;
var Sscer404ApplicationJsonErrorEnum;
(function (Sscer404ApplicationJsonErrorEnum) {
    Sscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sscer404ApplicationJsonErrorEnum = exports.Sscer404ApplicationJsonErrorEnum || (exports.Sscer404ApplicationJsonErrorEnum = {}));
var Sscer404ApplicationJsonErrorDescriptionEnum;
(function (Sscer404ApplicationJsonErrorDescriptionEnum) {
    Sscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sscer404ApplicationJsonErrorDescriptionEnum = exports.Sscer404ApplicationJsonErrorDescriptionEnum || (exports.Sscer404ApplicationJsonErrorDescriptionEnum = {}));
var Sscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer404ApplicationJson, _super);
    function Sscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sscer404ApplicationJson = Sscer404ApplicationJson;
var Sscer500ApplicationJsonErrorEnum;
(function (Sscer500ApplicationJsonErrorEnum) {
    Sscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sscer500ApplicationJsonErrorEnum = exports.Sscer500ApplicationJsonErrorEnum || (exports.Sscer500ApplicationJsonErrorEnum = {}));
var Sscer500ApplicationJsonErrorDescriptionEnum;
(function (Sscer500ApplicationJsonErrorDescriptionEnum) {
    Sscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sscer500ApplicationJsonErrorDescriptionEnum = exports.Sscer500ApplicationJsonErrorDescriptionEnum || (exports.Sscer500ApplicationJsonErrorDescriptionEnum = {}));
var Sscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer500ApplicationJson, _super);
    function Sscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sscer500ApplicationJson = Sscer500ApplicationJson;
var Sscer502ApplicationJsonErrorEnum;
(function (Sscer502ApplicationJsonErrorEnum) {
    Sscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sscer502ApplicationJsonErrorEnum = exports.Sscer502ApplicationJsonErrorEnum || (exports.Sscer502ApplicationJsonErrorEnum = {}));
var Sscer502ApplicationJsonErrorDescriptionEnum;
(function (Sscer502ApplicationJsonErrorDescriptionEnum) {
    Sscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sscer502ApplicationJsonErrorDescriptionEnum = exports.Sscer502ApplicationJsonErrorDescriptionEnum || (exports.Sscer502ApplicationJsonErrorDescriptionEnum = {}));
var Sscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer502ApplicationJson, _super);
    function Sscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sscer502ApplicationJson = Sscer502ApplicationJson;
var Sscer503ApplicationJsonErrorEnum;
(function (Sscer503ApplicationJsonErrorEnum) {
    Sscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sscer503ApplicationJsonErrorEnum = exports.Sscer503ApplicationJsonErrorEnum || (exports.Sscer503ApplicationJsonErrorEnum = {}));
var Sscer503ApplicationJsonErrorDescriptionEnum;
(function (Sscer503ApplicationJsonErrorDescriptionEnum) {
    Sscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sscer503ApplicationJsonErrorDescriptionEnum = exports.Sscer503ApplicationJsonErrorDescriptionEnum || (exports.Sscer503ApplicationJsonErrorDescriptionEnum = {}));
var Sscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer503ApplicationJson, _super);
    function Sscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sscer503ApplicationJson = Sscer503ApplicationJson;
var Sscer504ApplicationJsonErrorEnum;
(function (Sscer504ApplicationJsonErrorEnum) {
    Sscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sscer504ApplicationJsonErrorEnum = exports.Sscer504ApplicationJsonErrorEnum || (exports.Sscer504ApplicationJsonErrorEnum = {}));
var Sscer504ApplicationJsonErrorDescriptionEnum;
(function (Sscer504ApplicationJsonErrorDescriptionEnum) {
    Sscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sscer504ApplicationJsonErrorDescriptionEnum = exports.Sscer504ApplicationJsonErrorDescriptionEnum || (exports.Sscer504ApplicationJsonErrorDescriptionEnum = {}));
var Sscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sscer504ApplicationJson, _super);
    function Sscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Sscer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sscer504ApplicationJson = Sscer504ApplicationJson;
var SscerRequest = /** @class */ (function (_super) {
    __extends(SscerRequest, _super);
    function SscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SscerRequestBody)
    ], SscerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SscerSecurity)
    ], SscerRequest.prototype, "security", void 0);
    return SscerRequest;
}(utils_1.SpeakeasyBase));
exports.SscerRequest = SscerRequest;
var SscerResponse = /** @class */ (function (_super) {
    __extends(SscerResponse, _super);
    function SscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SscerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SscerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sscer400ApplicationJson)
    ], SscerResponse.prototype, "sscer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sscer401ApplicationJson)
    ], SscerResponse.prototype, "sscer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sscer404ApplicationJson)
    ], SscerResponse.prototype, "sscer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sscer500ApplicationJson)
    ], SscerResponse.prototype, "sscer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sscer502ApplicationJson)
    ], SscerResponse.prototype, "sscer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sscer503ApplicationJson)
    ], SscerResponse.prototype, "sscer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sscer504ApplicationJson)
    ], SscerResponse.prototype, "sscer504ApplicationJSONObject", void 0);
    return SscerResponse;
}(utils_1.SpeakeasyBase));
exports.SscerResponse = SscerResponse;
