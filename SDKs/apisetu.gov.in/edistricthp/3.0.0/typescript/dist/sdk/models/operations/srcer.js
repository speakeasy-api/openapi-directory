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
exports.SrcerResponse = exports.SrcerRequest = exports.Srcer504ApplicationJson = exports.Srcer504ApplicationJsonErrorDescriptionEnum = exports.Srcer504ApplicationJsonErrorEnum = exports.Srcer503ApplicationJson = exports.Srcer503ApplicationJsonErrorDescriptionEnum = exports.Srcer503ApplicationJsonErrorEnum = exports.Srcer502ApplicationJson = exports.Srcer502ApplicationJsonErrorDescriptionEnum = exports.Srcer502ApplicationJsonErrorEnum = exports.Srcer500ApplicationJson = exports.Srcer500ApplicationJsonErrorDescriptionEnum = exports.Srcer500ApplicationJsonErrorEnum = exports.Srcer404ApplicationJson = exports.Srcer404ApplicationJsonErrorDescriptionEnum = exports.Srcer404ApplicationJsonErrorEnum = exports.Srcer401ApplicationJson = exports.Srcer401ApplicationJsonErrorDescriptionEnum = exports.Srcer401ApplicationJsonErrorEnum = exports.Srcer400ApplicationJson = exports.Srcer400ApplicationJsonErrorDescriptionEnum = exports.Srcer400ApplicationJsonErrorEnum = exports.SrcerSecurity = exports.SrcerRequestBody = exports.SrcerRequestBodyFormatEnum = exports.SrcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SrcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SrcerRequestBodyCertificateParameters, _super);
    function SrcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], SrcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return SrcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SrcerRequestBodyCertificateParameters = SrcerRequestBodyCertificateParameters;
var SrcerRequestBodyFormatEnum;
(function (SrcerRequestBodyFormatEnum) {
    SrcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SrcerRequestBodyFormatEnum = exports.SrcerRequestBodyFormatEnum || (exports.SrcerRequestBodyFormatEnum = {}));
var SrcerRequestBody = /** @class */ (function (_super) {
    __extends(SrcerRequestBody, _super);
    function SrcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SrcerRequestBodyCertificateParameters)
    ], SrcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SrcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SrcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SrcerRequestBody.prototype, "txnId", void 0);
    return SrcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.SrcerRequestBody = SrcerRequestBody;
var SrcerSecurity = /** @class */ (function (_super) {
    __extends(SrcerSecurity, _super);
    function SrcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SrcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SrcerSecurity.prototype, "clientId", void 0);
    return SrcerSecurity;
}(utils_1.SpeakeasyBase));
exports.SrcerSecurity = SrcerSecurity;
var Srcer400ApplicationJsonErrorEnum;
(function (Srcer400ApplicationJsonErrorEnum) {
    Srcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Srcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Srcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Srcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Srcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Srcer400ApplicationJsonErrorEnum = exports.Srcer400ApplicationJsonErrorEnum || (exports.Srcer400ApplicationJsonErrorEnum = {}));
var Srcer400ApplicationJsonErrorDescriptionEnum;
(function (Srcer400ApplicationJsonErrorDescriptionEnum) {
    Srcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Srcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Srcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Srcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Srcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Srcer400ApplicationJsonErrorDescriptionEnum = exports.Srcer400ApplicationJsonErrorDescriptionEnum || (exports.Srcer400ApplicationJsonErrorDescriptionEnum = {}));
var Srcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer400ApplicationJson, _super);
    function Srcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Srcer400ApplicationJson = Srcer400ApplicationJson;
var Srcer401ApplicationJsonErrorEnum;
(function (Srcer401ApplicationJsonErrorEnum) {
    Srcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Srcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Srcer401ApplicationJsonErrorEnum = exports.Srcer401ApplicationJsonErrorEnum || (exports.Srcer401ApplicationJsonErrorEnum = {}));
var Srcer401ApplicationJsonErrorDescriptionEnum;
(function (Srcer401ApplicationJsonErrorDescriptionEnum) {
    Srcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Srcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Srcer401ApplicationJsonErrorDescriptionEnum = exports.Srcer401ApplicationJsonErrorDescriptionEnum || (exports.Srcer401ApplicationJsonErrorDescriptionEnum = {}));
var Srcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer401ApplicationJson, _super);
    function Srcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Srcer401ApplicationJson = Srcer401ApplicationJson;
var Srcer404ApplicationJsonErrorEnum;
(function (Srcer404ApplicationJsonErrorEnum) {
    Srcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Srcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Srcer404ApplicationJsonErrorEnum = exports.Srcer404ApplicationJsonErrorEnum || (exports.Srcer404ApplicationJsonErrorEnum = {}));
var Srcer404ApplicationJsonErrorDescriptionEnum;
(function (Srcer404ApplicationJsonErrorDescriptionEnum) {
    Srcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Srcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Srcer404ApplicationJsonErrorDescriptionEnum = exports.Srcer404ApplicationJsonErrorDescriptionEnum || (exports.Srcer404ApplicationJsonErrorDescriptionEnum = {}));
var Srcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer404ApplicationJson, _super);
    function Srcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Srcer404ApplicationJson = Srcer404ApplicationJson;
var Srcer500ApplicationJsonErrorEnum;
(function (Srcer500ApplicationJsonErrorEnum) {
    Srcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Srcer500ApplicationJsonErrorEnum = exports.Srcer500ApplicationJsonErrorEnum || (exports.Srcer500ApplicationJsonErrorEnum = {}));
var Srcer500ApplicationJsonErrorDescriptionEnum;
(function (Srcer500ApplicationJsonErrorDescriptionEnum) {
    Srcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Srcer500ApplicationJsonErrorDescriptionEnum = exports.Srcer500ApplicationJsonErrorDescriptionEnum || (exports.Srcer500ApplicationJsonErrorDescriptionEnum = {}));
var Srcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer500ApplicationJson, _super);
    function Srcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Srcer500ApplicationJson = Srcer500ApplicationJson;
var Srcer502ApplicationJsonErrorEnum;
(function (Srcer502ApplicationJsonErrorEnum) {
    Srcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Srcer502ApplicationJsonErrorEnum = exports.Srcer502ApplicationJsonErrorEnum || (exports.Srcer502ApplicationJsonErrorEnum = {}));
var Srcer502ApplicationJsonErrorDescriptionEnum;
(function (Srcer502ApplicationJsonErrorDescriptionEnum) {
    Srcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Srcer502ApplicationJsonErrorDescriptionEnum = exports.Srcer502ApplicationJsonErrorDescriptionEnum || (exports.Srcer502ApplicationJsonErrorDescriptionEnum = {}));
var Srcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer502ApplicationJson, _super);
    function Srcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Srcer502ApplicationJson = Srcer502ApplicationJson;
var Srcer503ApplicationJsonErrorEnum;
(function (Srcer503ApplicationJsonErrorEnum) {
    Srcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Srcer503ApplicationJsonErrorEnum = exports.Srcer503ApplicationJsonErrorEnum || (exports.Srcer503ApplicationJsonErrorEnum = {}));
var Srcer503ApplicationJsonErrorDescriptionEnum;
(function (Srcer503ApplicationJsonErrorDescriptionEnum) {
    Srcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Srcer503ApplicationJsonErrorDescriptionEnum = exports.Srcer503ApplicationJsonErrorDescriptionEnum || (exports.Srcer503ApplicationJsonErrorDescriptionEnum = {}));
var Srcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer503ApplicationJson, _super);
    function Srcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Srcer503ApplicationJson = Srcer503ApplicationJson;
var Srcer504ApplicationJsonErrorEnum;
(function (Srcer504ApplicationJsonErrorEnum) {
    Srcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Srcer504ApplicationJsonErrorEnum = exports.Srcer504ApplicationJsonErrorEnum || (exports.Srcer504ApplicationJsonErrorEnum = {}));
var Srcer504ApplicationJsonErrorDescriptionEnum;
(function (Srcer504ApplicationJsonErrorDescriptionEnum) {
    Srcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Srcer504ApplicationJsonErrorDescriptionEnum = exports.Srcer504ApplicationJsonErrorDescriptionEnum || (exports.Srcer504ApplicationJsonErrorDescriptionEnum = {}));
var Srcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Srcer504ApplicationJson, _super);
    function Srcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Srcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Srcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Srcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Srcer504ApplicationJson = Srcer504ApplicationJson;
var SrcerRequest = /** @class */ (function (_super) {
    __extends(SrcerRequest, _super);
    function SrcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SrcerRequestBody)
    ], SrcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SrcerSecurity)
    ], SrcerRequest.prototype, "security", void 0);
    return SrcerRequest;
}(utils_1.SpeakeasyBase));
exports.SrcerRequest = SrcerRequest;
var SrcerResponse = /** @class */ (function (_super) {
    __extends(SrcerResponse, _super);
    function SrcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SrcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SrcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Srcer400ApplicationJson)
    ], SrcerResponse.prototype, "srcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Srcer401ApplicationJson)
    ], SrcerResponse.prototype, "srcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Srcer404ApplicationJson)
    ], SrcerResponse.prototype, "srcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Srcer500ApplicationJson)
    ], SrcerResponse.prototype, "srcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Srcer502ApplicationJson)
    ], SrcerResponse.prototype, "srcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Srcer503ApplicationJson)
    ], SrcerResponse.prototype, "srcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Srcer504ApplicationJson)
    ], SrcerResponse.prototype, "srcer504ApplicationJSONObject", void 0);
    return SrcerResponse;
}(utils_1.SpeakeasyBase));
exports.SrcerResponse = SrcerResponse;
