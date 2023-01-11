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
exports.SpcerResponse = exports.SpcerRequest = exports.Spcer504ApplicationJson = exports.Spcer504ApplicationJsonErrorDescriptionEnum = exports.Spcer504ApplicationJsonErrorEnum = exports.Spcer503ApplicationJson = exports.Spcer503ApplicationJsonErrorDescriptionEnum = exports.Spcer503ApplicationJsonErrorEnum = exports.Spcer502ApplicationJson = exports.Spcer502ApplicationJsonErrorDescriptionEnum = exports.Spcer502ApplicationJsonErrorEnum = exports.Spcer500ApplicationJson = exports.Spcer500ApplicationJsonErrorDescriptionEnum = exports.Spcer500ApplicationJsonErrorEnum = exports.Spcer404ApplicationJson = exports.Spcer404ApplicationJsonErrorDescriptionEnum = exports.Spcer404ApplicationJsonErrorEnum = exports.Spcer401ApplicationJson = exports.Spcer401ApplicationJsonErrorDescriptionEnum = exports.Spcer401ApplicationJsonErrorEnum = exports.Spcer400ApplicationJson = exports.Spcer400ApplicationJsonErrorDescriptionEnum = exports.Spcer400ApplicationJsonErrorEnum = exports.SpcerSecurity = exports.SpcerRequestBody = exports.SpcerRequestBodyFormatEnum = exports.SpcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SpcerRequestBodyCertificateParameters, _super);
    function SpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SpcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollcode" }),
        __metadata("design:type", String)
    ], SpcerRequestBodyCertificateParameters.prototype, "rollcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], SpcerRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], SpcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return SpcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SpcerRequestBodyCertificateParameters = SpcerRequestBodyCertificateParameters;
var SpcerRequestBodyFormatEnum;
(function (SpcerRequestBodyFormatEnum) {
    SpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SpcerRequestBodyFormatEnum = exports.SpcerRequestBodyFormatEnum || (exports.SpcerRequestBodyFormatEnum = {}));
var SpcerRequestBody = /** @class */ (function (_super) {
    __extends(SpcerRequestBody, _super);
    function SpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SpcerRequestBodyCertificateParameters)
    ], SpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SpcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SpcerRequestBody.prototype, "txnId", void 0);
    return SpcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.SpcerRequestBody = SpcerRequestBody;
var SpcerSecurity = /** @class */ (function (_super) {
    __extends(SpcerSecurity, _super);
    function SpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SpcerSecurity.prototype, "clientId", void 0);
    return SpcerSecurity;
}(utils_1.SpeakeasyBase));
exports.SpcerSecurity = SpcerSecurity;
var Spcer400ApplicationJsonErrorEnum;
(function (Spcer400ApplicationJsonErrorEnum) {
    Spcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Spcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Spcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Spcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Spcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Spcer400ApplicationJsonErrorEnum = exports.Spcer400ApplicationJsonErrorEnum || (exports.Spcer400ApplicationJsonErrorEnum = {}));
var Spcer400ApplicationJsonErrorDescriptionEnum;
(function (Spcer400ApplicationJsonErrorDescriptionEnum) {
    Spcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Spcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Spcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Spcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Spcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Spcer400ApplicationJsonErrorDescriptionEnum = exports.Spcer400ApplicationJsonErrorDescriptionEnum || (exports.Spcer400ApplicationJsonErrorDescriptionEnum = {}));
var Spcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer400ApplicationJson, _super);
    function Spcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Spcer400ApplicationJson = Spcer400ApplicationJson;
var Spcer401ApplicationJsonErrorEnum;
(function (Spcer401ApplicationJsonErrorEnum) {
    Spcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Spcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Spcer401ApplicationJsonErrorEnum = exports.Spcer401ApplicationJsonErrorEnum || (exports.Spcer401ApplicationJsonErrorEnum = {}));
var Spcer401ApplicationJsonErrorDescriptionEnum;
(function (Spcer401ApplicationJsonErrorDescriptionEnum) {
    Spcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Spcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Spcer401ApplicationJsonErrorDescriptionEnum = exports.Spcer401ApplicationJsonErrorDescriptionEnum || (exports.Spcer401ApplicationJsonErrorDescriptionEnum = {}));
var Spcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer401ApplicationJson, _super);
    function Spcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Spcer401ApplicationJson = Spcer401ApplicationJson;
var Spcer404ApplicationJsonErrorEnum;
(function (Spcer404ApplicationJsonErrorEnum) {
    Spcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Spcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Spcer404ApplicationJsonErrorEnum = exports.Spcer404ApplicationJsonErrorEnum || (exports.Spcer404ApplicationJsonErrorEnum = {}));
var Spcer404ApplicationJsonErrorDescriptionEnum;
(function (Spcer404ApplicationJsonErrorDescriptionEnum) {
    Spcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Spcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Spcer404ApplicationJsonErrorDescriptionEnum = exports.Spcer404ApplicationJsonErrorDescriptionEnum || (exports.Spcer404ApplicationJsonErrorDescriptionEnum = {}));
var Spcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer404ApplicationJson, _super);
    function Spcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Spcer404ApplicationJson = Spcer404ApplicationJson;
var Spcer500ApplicationJsonErrorEnum;
(function (Spcer500ApplicationJsonErrorEnum) {
    Spcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Spcer500ApplicationJsonErrorEnum = exports.Spcer500ApplicationJsonErrorEnum || (exports.Spcer500ApplicationJsonErrorEnum = {}));
var Spcer500ApplicationJsonErrorDescriptionEnum;
(function (Spcer500ApplicationJsonErrorDescriptionEnum) {
    Spcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Spcer500ApplicationJsonErrorDescriptionEnum = exports.Spcer500ApplicationJsonErrorDescriptionEnum || (exports.Spcer500ApplicationJsonErrorDescriptionEnum = {}));
var Spcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer500ApplicationJson, _super);
    function Spcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Spcer500ApplicationJson = Spcer500ApplicationJson;
var Spcer502ApplicationJsonErrorEnum;
(function (Spcer502ApplicationJsonErrorEnum) {
    Spcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Spcer502ApplicationJsonErrorEnum = exports.Spcer502ApplicationJsonErrorEnum || (exports.Spcer502ApplicationJsonErrorEnum = {}));
var Spcer502ApplicationJsonErrorDescriptionEnum;
(function (Spcer502ApplicationJsonErrorDescriptionEnum) {
    Spcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Spcer502ApplicationJsonErrorDescriptionEnum = exports.Spcer502ApplicationJsonErrorDescriptionEnum || (exports.Spcer502ApplicationJsonErrorDescriptionEnum = {}));
var Spcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer502ApplicationJson, _super);
    function Spcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Spcer502ApplicationJson = Spcer502ApplicationJson;
var Spcer503ApplicationJsonErrorEnum;
(function (Spcer503ApplicationJsonErrorEnum) {
    Spcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Spcer503ApplicationJsonErrorEnum = exports.Spcer503ApplicationJsonErrorEnum || (exports.Spcer503ApplicationJsonErrorEnum = {}));
var Spcer503ApplicationJsonErrorDescriptionEnum;
(function (Spcer503ApplicationJsonErrorDescriptionEnum) {
    Spcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Spcer503ApplicationJsonErrorDescriptionEnum = exports.Spcer503ApplicationJsonErrorDescriptionEnum || (exports.Spcer503ApplicationJsonErrorDescriptionEnum = {}));
var Spcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer503ApplicationJson, _super);
    function Spcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Spcer503ApplicationJson = Spcer503ApplicationJson;
var Spcer504ApplicationJsonErrorEnum;
(function (Spcer504ApplicationJsonErrorEnum) {
    Spcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Spcer504ApplicationJsonErrorEnum = exports.Spcer504ApplicationJsonErrorEnum || (exports.Spcer504ApplicationJsonErrorEnum = {}));
var Spcer504ApplicationJsonErrorDescriptionEnum;
(function (Spcer504ApplicationJsonErrorDescriptionEnum) {
    Spcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Spcer504ApplicationJsonErrorDescriptionEnum = exports.Spcer504ApplicationJsonErrorDescriptionEnum || (exports.Spcer504ApplicationJsonErrorDescriptionEnum = {}));
var Spcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Spcer504ApplicationJson, _super);
    function Spcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Spcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Spcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Spcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Spcer504ApplicationJson = Spcer504ApplicationJson;
var SpcerRequest = /** @class */ (function (_super) {
    __extends(SpcerRequest, _super);
    function SpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SpcerRequestBody)
    ], SpcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SpcerSecurity)
    ], SpcerRequest.prototype, "security", void 0);
    return SpcerRequest;
}(utils_1.SpeakeasyBase));
exports.SpcerRequest = SpcerRequest;
var SpcerResponse = /** @class */ (function (_super) {
    __extends(SpcerResponse, _super);
    function SpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SpcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Spcer400ApplicationJson)
    ], SpcerResponse.prototype, "spcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Spcer401ApplicationJson)
    ], SpcerResponse.prototype, "spcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Spcer404ApplicationJson)
    ], SpcerResponse.prototype, "spcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Spcer500ApplicationJson)
    ], SpcerResponse.prototype, "spcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Spcer502ApplicationJson)
    ], SpcerResponse.prototype, "spcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Spcer503ApplicationJson)
    ], SpcerResponse.prototype, "spcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Spcer504ApplicationJson)
    ], SpcerResponse.prototype, "spcer504ApplicationJSONObject", void 0);
    return SpcerResponse;
}(utils_1.SpeakeasyBase));
exports.SpcerResponse = SpcerResponse;
