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
exports.RdcerResponse = exports.RdcerRequest = exports.Rdcer504ApplicationJson = exports.Rdcer504ApplicationJsonErrorDescriptionEnum = exports.Rdcer504ApplicationJsonErrorEnum = exports.Rdcer503ApplicationJson = exports.Rdcer503ApplicationJsonErrorDescriptionEnum = exports.Rdcer503ApplicationJsonErrorEnum = exports.Rdcer502ApplicationJson = exports.Rdcer502ApplicationJsonErrorDescriptionEnum = exports.Rdcer502ApplicationJsonErrorEnum = exports.Rdcer500ApplicationJson = exports.Rdcer500ApplicationJsonErrorDescriptionEnum = exports.Rdcer500ApplicationJsonErrorEnum = exports.Rdcer404ApplicationJson = exports.Rdcer404ApplicationJsonErrorDescriptionEnum = exports.Rdcer404ApplicationJsonErrorEnum = exports.Rdcer401ApplicationJson = exports.Rdcer401ApplicationJsonErrorDescriptionEnum = exports.Rdcer401ApplicationJsonErrorEnum = exports.Rdcer400ApplicationJson = exports.Rdcer400ApplicationJsonErrorDescriptionEnum = exports.Rdcer400ApplicationJsonErrorEnum = exports.RdcerSecurity = exports.RdcerRequestBody = exports.RdcerRequestBodyFormatEnum = exports.RdcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RdcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RdcerRequestBodyCertificateParameters, _super);
    function RdcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RdcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], RdcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=final_doc_reg_no" }),
        __metadata("design:type", String)
    ], RdcerRequestBodyCertificateParameters.prototype, "finalDocRegNo", void 0);
    return RdcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RdcerRequestBodyCertificateParameters = RdcerRequestBodyCertificateParameters;
var RdcerRequestBodyFormatEnum;
(function (RdcerRequestBodyFormatEnum) {
    RdcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RdcerRequestBodyFormatEnum = exports.RdcerRequestBodyFormatEnum || (exports.RdcerRequestBodyFormatEnum = {}));
var RdcerRequestBody = /** @class */ (function (_super) {
    __extends(RdcerRequestBody, _super);
    function RdcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RdcerRequestBodyCertificateParameters)
    ], RdcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RdcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RdcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RdcerRequestBody.prototype, "txnId", void 0);
    return RdcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RdcerRequestBody = RdcerRequestBody;
var RdcerSecurity = /** @class */ (function (_super) {
    __extends(RdcerSecurity, _super);
    function RdcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RdcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RdcerSecurity.prototype, "clientId", void 0);
    return RdcerSecurity;
}(utils_1.SpeakeasyBase));
exports.RdcerSecurity = RdcerSecurity;
var Rdcer400ApplicationJsonErrorEnum;
(function (Rdcer400ApplicationJsonErrorEnum) {
    Rdcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rdcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rdcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rdcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rdcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rdcer400ApplicationJsonErrorEnum = exports.Rdcer400ApplicationJsonErrorEnum || (exports.Rdcer400ApplicationJsonErrorEnum = {}));
var Rdcer400ApplicationJsonErrorDescriptionEnum;
(function (Rdcer400ApplicationJsonErrorDescriptionEnum) {
    Rdcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rdcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rdcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rdcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rdcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rdcer400ApplicationJsonErrorDescriptionEnum = exports.Rdcer400ApplicationJsonErrorDescriptionEnum || (exports.Rdcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer400ApplicationJson, _super);
    function Rdcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rdcer400ApplicationJson = Rdcer400ApplicationJson;
var Rdcer401ApplicationJsonErrorEnum;
(function (Rdcer401ApplicationJsonErrorEnum) {
    Rdcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rdcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rdcer401ApplicationJsonErrorEnum = exports.Rdcer401ApplicationJsonErrorEnum || (exports.Rdcer401ApplicationJsonErrorEnum = {}));
var Rdcer401ApplicationJsonErrorDescriptionEnum;
(function (Rdcer401ApplicationJsonErrorDescriptionEnum) {
    Rdcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rdcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rdcer401ApplicationJsonErrorDescriptionEnum = exports.Rdcer401ApplicationJsonErrorDescriptionEnum || (exports.Rdcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer401ApplicationJson, _super);
    function Rdcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rdcer401ApplicationJson = Rdcer401ApplicationJson;
var Rdcer404ApplicationJsonErrorEnum;
(function (Rdcer404ApplicationJsonErrorEnum) {
    Rdcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rdcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rdcer404ApplicationJsonErrorEnum = exports.Rdcer404ApplicationJsonErrorEnum || (exports.Rdcer404ApplicationJsonErrorEnum = {}));
var Rdcer404ApplicationJsonErrorDescriptionEnum;
(function (Rdcer404ApplicationJsonErrorDescriptionEnum) {
    Rdcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rdcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rdcer404ApplicationJsonErrorDescriptionEnum = exports.Rdcer404ApplicationJsonErrorDescriptionEnum || (exports.Rdcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer404ApplicationJson, _super);
    function Rdcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rdcer404ApplicationJson = Rdcer404ApplicationJson;
var Rdcer500ApplicationJsonErrorEnum;
(function (Rdcer500ApplicationJsonErrorEnum) {
    Rdcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rdcer500ApplicationJsonErrorEnum = exports.Rdcer500ApplicationJsonErrorEnum || (exports.Rdcer500ApplicationJsonErrorEnum = {}));
var Rdcer500ApplicationJsonErrorDescriptionEnum;
(function (Rdcer500ApplicationJsonErrorDescriptionEnum) {
    Rdcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rdcer500ApplicationJsonErrorDescriptionEnum = exports.Rdcer500ApplicationJsonErrorDescriptionEnum || (exports.Rdcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer500ApplicationJson, _super);
    function Rdcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rdcer500ApplicationJson = Rdcer500ApplicationJson;
var Rdcer502ApplicationJsonErrorEnum;
(function (Rdcer502ApplicationJsonErrorEnum) {
    Rdcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rdcer502ApplicationJsonErrorEnum = exports.Rdcer502ApplicationJsonErrorEnum || (exports.Rdcer502ApplicationJsonErrorEnum = {}));
var Rdcer502ApplicationJsonErrorDescriptionEnum;
(function (Rdcer502ApplicationJsonErrorDescriptionEnum) {
    Rdcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rdcer502ApplicationJsonErrorDescriptionEnum = exports.Rdcer502ApplicationJsonErrorDescriptionEnum || (exports.Rdcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer502ApplicationJson, _super);
    function Rdcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rdcer502ApplicationJson = Rdcer502ApplicationJson;
var Rdcer503ApplicationJsonErrorEnum;
(function (Rdcer503ApplicationJsonErrorEnum) {
    Rdcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rdcer503ApplicationJsonErrorEnum = exports.Rdcer503ApplicationJsonErrorEnum || (exports.Rdcer503ApplicationJsonErrorEnum = {}));
var Rdcer503ApplicationJsonErrorDescriptionEnum;
(function (Rdcer503ApplicationJsonErrorDescriptionEnum) {
    Rdcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rdcer503ApplicationJsonErrorDescriptionEnum = exports.Rdcer503ApplicationJsonErrorDescriptionEnum || (exports.Rdcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer503ApplicationJson, _super);
    function Rdcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rdcer503ApplicationJson = Rdcer503ApplicationJson;
var Rdcer504ApplicationJsonErrorEnum;
(function (Rdcer504ApplicationJsonErrorEnum) {
    Rdcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rdcer504ApplicationJsonErrorEnum = exports.Rdcer504ApplicationJsonErrorEnum || (exports.Rdcer504ApplicationJsonErrorEnum = {}));
var Rdcer504ApplicationJsonErrorDescriptionEnum;
(function (Rdcer504ApplicationJsonErrorDescriptionEnum) {
    Rdcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rdcer504ApplicationJsonErrorDescriptionEnum = exports.Rdcer504ApplicationJsonErrorDescriptionEnum || (exports.Rdcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rdcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rdcer504ApplicationJson, _super);
    function Rdcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rdcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rdcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rdcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rdcer504ApplicationJson = Rdcer504ApplicationJson;
var RdcerRequest = /** @class */ (function (_super) {
    __extends(RdcerRequest, _super);
    function RdcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RdcerRequestBody)
    ], RdcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RdcerSecurity)
    ], RdcerRequest.prototype, "security", void 0);
    return RdcerRequest;
}(utils_1.SpeakeasyBase));
exports.RdcerRequest = RdcerRequest;
var RdcerResponse = /** @class */ (function (_super) {
    __extends(RdcerResponse, _super);
    function RdcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RdcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RdcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rdcer400ApplicationJson)
    ], RdcerResponse.prototype, "rdcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rdcer401ApplicationJson)
    ], RdcerResponse.prototype, "rdcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rdcer404ApplicationJson)
    ], RdcerResponse.prototype, "rdcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rdcer500ApplicationJson)
    ], RdcerResponse.prototype, "rdcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rdcer502ApplicationJson)
    ], RdcerResponse.prototype, "rdcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rdcer503ApplicationJson)
    ], RdcerResponse.prototype, "rdcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rdcer504ApplicationJson)
    ], RdcerResponse.prototype, "rdcer504ApplicationJSONObject", void 0);
    return RdcerResponse;
}(utils_1.SpeakeasyBase));
exports.RdcerResponse = RdcerResponse;
