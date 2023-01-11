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
exports.TrcerResponse = exports.TrcerRequest = exports.Trcer504ApplicationJson = exports.Trcer504ApplicationJsonErrorDescriptionEnum = exports.Trcer504ApplicationJsonErrorEnum = exports.Trcer503ApplicationJson = exports.Trcer503ApplicationJsonErrorDescriptionEnum = exports.Trcer503ApplicationJsonErrorEnum = exports.Trcer502ApplicationJson = exports.Trcer502ApplicationJsonErrorDescriptionEnum = exports.Trcer502ApplicationJsonErrorEnum = exports.Trcer500ApplicationJson = exports.Trcer500ApplicationJsonErrorDescriptionEnum = exports.Trcer500ApplicationJsonErrorEnum = exports.Trcer404ApplicationJson = exports.Trcer404ApplicationJsonErrorDescriptionEnum = exports.Trcer404ApplicationJsonErrorEnum = exports.Trcer401ApplicationJson = exports.Trcer401ApplicationJsonErrorDescriptionEnum = exports.Trcer401ApplicationJsonErrorEnum = exports.Trcer400ApplicationJson = exports.Trcer400ApplicationJsonErrorDescriptionEnum = exports.Trcer400ApplicationJsonErrorEnum = exports.TrcerSecurity = exports.TrcerRequestBody = exports.TrcerRequestBodyFormatEnum = exports.TrcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TrcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TrcerRequestBodyCertificateParameters, _super);
    function TrcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], TrcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TrcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=REG_NO" }),
        __metadata("design:type", String)
    ], TrcerRequestBodyCertificateParameters.prototype, "regNO", void 0);
    return TrcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.TrcerRequestBodyCertificateParameters = TrcerRequestBodyCertificateParameters;
var TrcerRequestBodyFormatEnum;
(function (TrcerRequestBodyFormatEnum) {
    TrcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(TrcerRequestBodyFormatEnum = exports.TrcerRequestBodyFormatEnum || (exports.TrcerRequestBodyFormatEnum = {}));
var TrcerRequestBody = /** @class */ (function (_super) {
    __extends(TrcerRequestBody, _super);
    function TrcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TrcerRequestBodyCertificateParameters)
    ], TrcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TrcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TrcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TrcerRequestBody.prototype, "txnId", void 0);
    return TrcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.TrcerRequestBody = TrcerRequestBody;
var TrcerSecurity = /** @class */ (function (_super) {
    __extends(TrcerSecurity, _super);
    function TrcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TrcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TrcerSecurity.prototype, "clientId", void 0);
    return TrcerSecurity;
}(utils_1.SpeakeasyBase));
exports.TrcerSecurity = TrcerSecurity;
var Trcer400ApplicationJsonErrorEnum;
(function (Trcer400ApplicationJsonErrorEnum) {
    Trcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Trcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Trcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Trcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Trcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Trcer400ApplicationJsonErrorEnum = exports.Trcer400ApplicationJsonErrorEnum || (exports.Trcer400ApplicationJsonErrorEnum = {}));
var Trcer400ApplicationJsonErrorDescriptionEnum;
(function (Trcer400ApplicationJsonErrorDescriptionEnum) {
    Trcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Trcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Trcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Trcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Trcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Trcer400ApplicationJsonErrorDescriptionEnum = exports.Trcer400ApplicationJsonErrorDescriptionEnum || (exports.Trcer400ApplicationJsonErrorDescriptionEnum = {}));
var Trcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer400ApplicationJson, _super);
    function Trcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Trcer400ApplicationJson = Trcer400ApplicationJson;
var Trcer401ApplicationJsonErrorEnum;
(function (Trcer401ApplicationJsonErrorEnum) {
    Trcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Trcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Trcer401ApplicationJsonErrorEnum = exports.Trcer401ApplicationJsonErrorEnum || (exports.Trcer401ApplicationJsonErrorEnum = {}));
var Trcer401ApplicationJsonErrorDescriptionEnum;
(function (Trcer401ApplicationJsonErrorDescriptionEnum) {
    Trcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Trcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Trcer401ApplicationJsonErrorDescriptionEnum = exports.Trcer401ApplicationJsonErrorDescriptionEnum || (exports.Trcer401ApplicationJsonErrorDescriptionEnum = {}));
var Trcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer401ApplicationJson, _super);
    function Trcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Trcer401ApplicationJson = Trcer401ApplicationJson;
var Trcer404ApplicationJsonErrorEnum;
(function (Trcer404ApplicationJsonErrorEnum) {
    Trcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Trcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Trcer404ApplicationJsonErrorEnum = exports.Trcer404ApplicationJsonErrorEnum || (exports.Trcer404ApplicationJsonErrorEnum = {}));
var Trcer404ApplicationJsonErrorDescriptionEnum;
(function (Trcer404ApplicationJsonErrorDescriptionEnum) {
    Trcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Trcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Trcer404ApplicationJsonErrorDescriptionEnum = exports.Trcer404ApplicationJsonErrorDescriptionEnum || (exports.Trcer404ApplicationJsonErrorDescriptionEnum = {}));
var Trcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer404ApplicationJson, _super);
    function Trcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Trcer404ApplicationJson = Trcer404ApplicationJson;
var Trcer500ApplicationJsonErrorEnum;
(function (Trcer500ApplicationJsonErrorEnum) {
    Trcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Trcer500ApplicationJsonErrorEnum = exports.Trcer500ApplicationJsonErrorEnum || (exports.Trcer500ApplicationJsonErrorEnum = {}));
var Trcer500ApplicationJsonErrorDescriptionEnum;
(function (Trcer500ApplicationJsonErrorDescriptionEnum) {
    Trcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Trcer500ApplicationJsonErrorDescriptionEnum = exports.Trcer500ApplicationJsonErrorDescriptionEnum || (exports.Trcer500ApplicationJsonErrorDescriptionEnum = {}));
var Trcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer500ApplicationJson, _super);
    function Trcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Trcer500ApplicationJson = Trcer500ApplicationJson;
var Trcer502ApplicationJsonErrorEnum;
(function (Trcer502ApplicationJsonErrorEnum) {
    Trcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Trcer502ApplicationJsonErrorEnum = exports.Trcer502ApplicationJsonErrorEnum || (exports.Trcer502ApplicationJsonErrorEnum = {}));
var Trcer502ApplicationJsonErrorDescriptionEnum;
(function (Trcer502ApplicationJsonErrorDescriptionEnum) {
    Trcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Trcer502ApplicationJsonErrorDescriptionEnum = exports.Trcer502ApplicationJsonErrorDescriptionEnum || (exports.Trcer502ApplicationJsonErrorDescriptionEnum = {}));
var Trcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer502ApplicationJson, _super);
    function Trcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Trcer502ApplicationJson = Trcer502ApplicationJson;
var Trcer503ApplicationJsonErrorEnum;
(function (Trcer503ApplicationJsonErrorEnum) {
    Trcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Trcer503ApplicationJsonErrorEnum = exports.Trcer503ApplicationJsonErrorEnum || (exports.Trcer503ApplicationJsonErrorEnum = {}));
var Trcer503ApplicationJsonErrorDescriptionEnum;
(function (Trcer503ApplicationJsonErrorDescriptionEnum) {
    Trcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Trcer503ApplicationJsonErrorDescriptionEnum = exports.Trcer503ApplicationJsonErrorDescriptionEnum || (exports.Trcer503ApplicationJsonErrorDescriptionEnum = {}));
var Trcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer503ApplicationJson, _super);
    function Trcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Trcer503ApplicationJson = Trcer503ApplicationJson;
var Trcer504ApplicationJsonErrorEnum;
(function (Trcer504ApplicationJsonErrorEnum) {
    Trcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Trcer504ApplicationJsonErrorEnum = exports.Trcer504ApplicationJsonErrorEnum || (exports.Trcer504ApplicationJsonErrorEnum = {}));
var Trcer504ApplicationJsonErrorDescriptionEnum;
(function (Trcer504ApplicationJsonErrorDescriptionEnum) {
    Trcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Trcer504ApplicationJsonErrorDescriptionEnum = exports.Trcer504ApplicationJsonErrorDescriptionEnum || (exports.Trcer504ApplicationJsonErrorDescriptionEnum = {}));
var Trcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Trcer504ApplicationJson, _super);
    function Trcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Trcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Trcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Trcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Trcer504ApplicationJson = Trcer504ApplicationJson;
var TrcerRequest = /** @class */ (function (_super) {
    __extends(TrcerRequest, _super);
    function TrcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TrcerRequestBody)
    ], TrcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrcerSecurity)
    ], TrcerRequest.prototype, "security", void 0);
    return TrcerRequest;
}(utils_1.SpeakeasyBase));
exports.TrcerRequest = TrcerRequest;
var TrcerResponse = /** @class */ (function (_super) {
    __extends(TrcerResponse, _super);
    function TrcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TrcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TrcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Trcer400ApplicationJson)
    ], TrcerResponse.prototype, "trcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Trcer401ApplicationJson)
    ], TrcerResponse.prototype, "trcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Trcer404ApplicationJson)
    ], TrcerResponse.prototype, "trcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Trcer500ApplicationJson)
    ], TrcerResponse.prototype, "trcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Trcer502ApplicationJson)
    ], TrcerResponse.prototype, "trcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Trcer503ApplicationJson)
    ], TrcerResponse.prototype, "trcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Trcer504ApplicationJson)
    ], TrcerResponse.prototype, "trcer504ApplicationJSONObject", void 0);
    return TrcerResponse;
}(utils_1.SpeakeasyBase));
exports.TrcerResponse = TrcerResponse;
