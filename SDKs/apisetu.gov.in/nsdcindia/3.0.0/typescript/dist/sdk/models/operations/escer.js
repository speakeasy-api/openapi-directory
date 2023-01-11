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
exports.EscerResponse = exports.EscerRequest = exports.Escer504ApplicationJson = exports.Escer504ApplicationJsonErrorDescriptionEnum = exports.Escer504ApplicationJsonErrorEnum = exports.Escer503ApplicationJson = exports.Escer503ApplicationJsonErrorDescriptionEnum = exports.Escer503ApplicationJsonErrorEnum = exports.Escer502ApplicationJson = exports.Escer502ApplicationJsonErrorDescriptionEnum = exports.Escer502ApplicationJsonErrorEnum = exports.Escer500ApplicationJson = exports.Escer500ApplicationJsonErrorDescriptionEnum = exports.Escer500ApplicationJsonErrorEnum = exports.Escer404ApplicationJson = exports.Escer404ApplicationJsonErrorDescriptionEnum = exports.Escer404ApplicationJsonErrorEnum = exports.Escer401ApplicationJson = exports.Escer401ApplicationJsonErrorDescriptionEnum = exports.Escer401ApplicationJsonErrorEnum = exports.Escer400ApplicationJson = exports.Escer400ApplicationJsonErrorDescriptionEnum = exports.Escer400ApplicationJsonErrorEnum = exports.EscerSecurity = exports.EscerRequestBody = exports.EscerRequestBodyFormatEnum = exports.EscerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(EscerRequestBodyCertificateParameters, _super);
    function EscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], EscerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOCID" }),
        __metadata("design:type", String)
    ], EscerRequestBodyCertificateParameters.prototype, "docid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], EscerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    return EscerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.EscerRequestBodyCertificateParameters = EscerRequestBodyCertificateParameters;
var EscerRequestBodyFormatEnum;
(function (EscerRequestBodyFormatEnum) {
    EscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(EscerRequestBodyFormatEnum = exports.EscerRequestBodyFormatEnum || (exports.EscerRequestBodyFormatEnum = {}));
var EscerRequestBody = /** @class */ (function (_super) {
    __extends(EscerRequestBody, _super);
    function EscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", EscerRequestBodyCertificateParameters)
    ], EscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], EscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], EscerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], EscerRequestBody.prototype, "txnId", void 0);
    return EscerRequestBody;
}(utils_1.SpeakeasyBase));
exports.EscerRequestBody = EscerRequestBody;
var EscerSecurity = /** @class */ (function (_super) {
    __extends(EscerSecurity, _super);
    function EscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], EscerSecurity.prototype, "clientId", void 0);
    return EscerSecurity;
}(utils_1.SpeakeasyBase));
exports.EscerSecurity = EscerSecurity;
var Escer400ApplicationJsonErrorEnum;
(function (Escer400ApplicationJsonErrorEnum) {
    Escer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Escer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Escer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Escer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Escer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Escer400ApplicationJsonErrorEnum = exports.Escer400ApplicationJsonErrorEnum || (exports.Escer400ApplicationJsonErrorEnum = {}));
var Escer400ApplicationJsonErrorDescriptionEnum;
(function (Escer400ApplicationJsonErrorDescriptionEnum) {
    Escer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Escer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Escer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Escer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Escer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Escer400ApplicationJsonErrorDescriptionEnum = exports.Escer400ApplicationJsonErrorDescriptionEnum || (exports.Escer400ApplicationJsonErrorDescriptionEnum = {}));
var Escer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Escer400ApplicationJson, _super);
    function Escer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Escer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Escer400ApplicationJson.prototype, "errorDescription", void 0);
    return Escer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Escer400ApplicationJson = Escer400ApplicationJson;
var Escer401ApplicationJsonErrorEnum;
(function (Escer401ApplicationJsonErrorEnum) {
    Escer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Escer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Escer401ApplicationJsonErrorEnum = exports.Escer401ApplicationJsonErrorEnum || (exports.Escer401ApplicationJsonErrorEnum = {}));
var Escer401ApplicationJsonErrorDescriptionEnum;
(function (Escer401ApplicationJsonErrorDescriptionEnum) {
    Escer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Escer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Escer401ApplicationJsonErrorDescriptionEnum = exports.Escer401ApplicationJsonErrorDescriptionEnum || (exports.Escer401ApplicationJsonErrorDescriptionEnum = {}));
var Escer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Escer401ApplicationJson, _super);
    function Escer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Escer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Escer401ApplicationJson.prototype, "errorDescription", void 0);
    return Escer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Escer401ApplicationJson = Escer401ApplicationJson;
var Escer404ApplicationJsonErrorEnum;
(function (Escer404ApplicationJsonErrorEnum) {
    Escer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Escer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Escer404ApplicationJsonErrorEnum = exports.Escer404ApplicationJsonErrorEnum || (exports.Escer404ApplicationJsonErrorEnum = {}));
var Escer404ApplicationJsonErrorDescriptionEnum;
(function (Escer404ApplicationJsonErrorDescriptionEnum) {
    Escer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Escer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Escer404ApplicationJsonErrorDescriptionEnum = exports.Escer404ApplicationJsonErrorDescriptionEnum || (exports.Escer404ApplicationJsonErrorDescriptionEnum = {}));
var Escer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Escer404ApplicationJson, _super);
    function Escer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Escer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Escer404ApplicationJson.prototype, "errorDescription", void 0);
    return Escer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Escer404ApplicationJson = Escer404ApplicationJson;
var Escer500ApplicationJsonErrorEnum;
(function (Escer500ApplicationJsonErrorEnum) {
    Escer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Escer500ApplicationJsonErrorEnum = exports.Escer500ApplicationJsonErrorEnum || (exports.Escer500ApplicationJsonErrorEnum = {}));
var Escer500ApplicationJsonErrorDescriptionEnum;
(function (Escer500ApplicationJsonErrorDescriptionEnum) {
    Escer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Escer500ApplicationJsonErrorDescriptionEnum = exports.Escer500ApplicationJsonErrorDescriptionEnum || (exports.Escer500ApplicationJsonErrorDescriptionEnum = {}));
var Escer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Escer500ApplicationJson, _super);
    function Escer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Escer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Escer500ApplicationJson.prototype, "errorDescription", void 0);
    return Escer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Escer500ApplicationJson = Escer500ApplicationJson;
var Escer502ApplicationJsonErrorEnum;
(function (Escer502ApplicationJsonErrorEnum) {
    Escer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Escer502ApplicationJsonErrorEnum = exports.Escer502ApplicationJsonErrorEnum || (exports.Escer502ApplicationJsonErrorEnum = {}));
var Escer502ApplicationJsonErrorDescriptionEnum;
(function (Escer502ApplicationJsonErrorDescriptionEnum) {
    Escer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Escer502ApplicationJsonErrorDescriptionEnum = exports.Escer502ApplicationJsonErrorDescriptionEnum || (exports.Escer502ApplicationJsonErrorDescriptionEnum = {}));
var Escer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Escer502ApplicationJson, _super);
    function Escer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Escer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Escer502ApplicationJson.prototype, "errorDescription", void 0);
    return Escer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Escer502ApplicationJson = Escer502ApplicationJson;
var Escer503ApplicationJsonErrorEnum;
(function (Escer503ApplicationJsonErrorEnum) {
    Escer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Escer503ApplicationJsonErrorEnum = exports.Escer503ApplicationJsonErrorEnum || (exports.Escer503ApplicationJsonErrorEnum = {}));
var Escer503ApplicationJsonErrorDescriptionEnum;
(function (Escer503ApplicationJsonErrorDescriptionEnum) {
    Escer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Escer503ApplicationJsonErrorDescriptionEnum = exports.Escer503ApplicationJsonErrorDescriptionEnum || (exports.Escer503ApplicationJsonErrorDescriptionEnum = {}));
var Escer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Escer503ApplicationJson, _super);
    function Escer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Escer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Escer503ApplicationJson.prototype, "errorDescription", void 0);
    return Escer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Escer503ApplicationJson = Escer503ApplicationJson;
var Escer504ApplicationJsonErrorEnum;
(function (Escer504ApplicationJsonErrorEnum) {
    Escer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Escer504ApplicationJsonErrorEnum = exports.Escer504ApplicationJsonErrorEnum || (exports.Escer504ApplicationJsonErrorEnum = {}));
var Escer504ApplicationJsonErrorDescriptionEnum;
(function (Escer504ApplicationJsonErrorDescriptionEnum) {
    Escer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Escer504ApplicationJsonErrorDescriptionEnum = exports.Escer504ApplicationJsonErrorDescriptionEnum || (exports.Escer504ApplicationJsonErrorDescriptionEnum = {}));
var Escer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Escer504ApplicationJson, _super);
    function Escer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Escer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Escer504ApplicationJson.prototype, "errorDescription", void 0);
    return Escer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Escer504ApplicationJson = Escer504ApplicationJson;
var EscerRequest = /** @class */ (function (_super) {
    __extends(EscerRequest, _super);
    function EscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EscerRequestBody)
    ], EscerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EscerSecurity)
    ], EscerRequest.prototype, "security", void 0);
    return EscerRequest;
}(utils_1.SpeakeasyBase));
exports.EscerRequest = EscerRequest;
var EscerResponse = /** @class */ (function (_super) {
    __extends(EscerResponse, _super);
    function EscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EscerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EscerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Escer400ApplicationJson)
    ], EscerResponse.prototype, "escer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Escer401ApplicationJson)
    ], EscerResponse.prototype, "escer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Escer404ApplicationJson)
    ], EscerResponse.prototype, "escer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Escer500ApplicationJson)
    ], EscerResponse.prototype, "escer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Escer502ApplicationJson)
    ], EscerResponse.prototype, "escer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Escer503ApplicationJson)
    ], EscerResponse.prototype, "escer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Escer504ApplicationJson)
    ], EscerResponse.prototype, "escer504ApplicationJSONObject", void 0);
    return EscerResponse;
}(utils_1.SpeakeasyBase));
exports.EscerResponse = EscerResponse;
