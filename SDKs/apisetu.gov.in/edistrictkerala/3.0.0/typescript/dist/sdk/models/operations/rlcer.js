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
exports.RlcerResponse = exports.RlcerRequest = exports.Rlcer504ApplicationJson = exports.Rlcer504ApplicationJsonErrorDescriptionEnum = exports.Rlcer504ApplicationJsonErrorEnum = exports.Rlcer503ApplicationJson = exports.Rlcer503ApplicationJsonErrorDescriptionEnum = exports.Rlcer503ApplicationJsonErrorEnum = exports.Rlcer502ApplicationJson = exports.Rlcer502ApplicationJsonErrorDescriptionEnum = exports.Rlcer502ApplicationJsonErrorEnum = exports.Rlcer500ApplicationJson = exports.Rlcer500ApplicationJsonErrorDescriptionEnum = exports.Rlcer500ApplicationJsonErrorEnum = exports.Rlcer404ApplicationJson = exports.Rlcer404ApplicationJsonErrorDescriptionEnum = exports.Rlcer404ApplicationJsonErrorEnum = exports.Rlcer401ApplicationJson = exports.Rlcer401ApplicationJsonErrorDescriptionEnum = exports.Rlcer401ApplicationJsonErrorEnum = exports.Rlcer400ApplicationJson = exports.Rlcer400ApplicationJsonErrorDescriptionEnum = exports.Rlcer400ApplicationJsonErrorEnum = exports.RlcerSecurity = exports.RlcerRequestBody = exports.RlcerRequestBodyFormatEnum = exports.RlcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RlcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RlcerRequestBodyCertificateParameters, _super);
    function RlcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], RlcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], RlcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], RlcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return RlcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RlcerRequestBodyCertificateParameters = RlcerRequestBodyCertificateParameters;
var RlcerRequestBodyFormatEnum;
(function (RlcerRequestBodyFormatEnum) {
    RlcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RlcerRequestBodyFormatEnum = exports.RlcerRequestBodyFormatEnum || (exports.RlcerRequestBodyFormatEnum = {}));
var RlcerRequestBody = /** @class */ (function (_super) {
    __extends(RlcerRequestBody, _super);
    function RlcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RlcerRequestBodyCertificateParameters)
    ], RlcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RlcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RlcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RlcerRequestBody.prototype, "txnId", void 0);
    return RlcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RlcerRequestBody = RlcerRequestBody;
var RlcerSecurity = /** @class */ (function (_super) {
    __extends(RlcerSecurity, _super);
    function RlcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RlcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RlcerSecurity.prototype, "clientId", void 0);
    return RlcerSecurity;
}(utils_1.SpeakeasyBase));
exports.RlcerSecurity = RlcerSecurity;
var Rlcer400ApplicationJsonErrorEnum;
(function (Rlcer400ApplicationJsonErrorEnum) {
    Rlcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rlcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rlcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rlcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rlcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rlcer400ApplicationJsonErrorEnum = exports.Rlcer400ApplicationJsonErrorEnum || (exports.Rlcer400ApplicationJsonErrorEnum = {}));
var Rlcer400ApplicationJsonErrorDescriptionEnum;
(function (Rlcer400ApplicationJsonErrorDescriptionEnum) {
    Rlcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rlcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rlcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rlcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rlcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rlcer400ApplicationJsonErrorDescriptionEnum = exports.Rlcer400ApplicationJsonErrorDescriptionEnum || (exports.Rlcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer400ApplicationJson, _super);
    function Rlcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rlcer400ApplicationJson = Rlcer400ApplicationJson;
var Rlcer401ApplicationJsonErrorEnum;
(function (Rlcer401ApplicationJsonErrorEnum) {
    Rlcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rlcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rlcer401ApplicationJsonErrorEnum = exports.Rlcer401ApplicationJsonErrorEnum || (exports.Rlcer401ApplicationJsonErrorEnum = {}));
var Rlcer401ApplicationJsonErrorDescriptionEnum;
(function (Rlcer401ApplicationJsonErrorDescriptionEnum) {
    Rlcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rlcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rlcer401ApplicationJsonErrorDescriptionEnum = exports.Rlcer401ApplicationJsonErrorDescriptionEnum || (exports.Rlcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer401ApplicationJson, _super);
    function Rlcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rlcer401ApplicationJson = Rlcer401ApplicationJson;
var Rlcer404ApplicationJsonErrorEnum;
(function (Rlcer404ApplicationJsonErrorEnum) {
    Rlcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rlcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rlcer404ApplicationJsonErrorEnum = exports.Rlcer404ApplicationJsonErrorEnum || (exports.Rlcer404ApplicationJsonErrorEnum = {}));
var Rlcer404ApplicationJsonErrorDescriptionEnum;
(function (Rlcer404ApplicationJsonErrorDescriptionEnum) {
    Rlcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rlcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rlcer404ApplicationJsonErrorDescriptionEnum = exports.Rlcer404ApplicationJsonErrorDescriptionEnum || (exports.Rlcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer404ApplicationJson, _super);
    function Rlcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rlcer404ApplicationJson = Rlcer404ApplicationJson;
var Rlcer500ApplicationJsonErrorEnum;
(function (Rlcer500ApplicationJsonErrorEnum) {
    Rlcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rlcer500ApplicationJsonErrorEnum = exports.Rlcer500ApplicationJsonErrorEnum || (exports.Rlcer500ApplicationJsonErrorEnum = {}));
var Rlcer500ApplicationJsonErrorDescriptionEnum;
(function (Rlcer500ApplicationJsonErrorDescriptionEnum) {
    Rlcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rlcer500ApplicationJsonErrorDescriptionEnum = exports.Rlcer500ApplicationJsonErrorDescriptionEnum || (exports.Rlcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer500ApplicationJson, _super);
    function Rlcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rlcer500ApplicationJson = Rlcer500ApplicationJson;
var Rlcer502ApplicationJsonErrorEnum;
(function (Rlcer502ApplicationJsonErrorEnum) {
    Rlcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rlcer502ApplicationJsonErrorEnum = exports.Rlcer502ApplicationJsonErrorEnum || (exports.Rlcer502ApplicationJsonErrorEnum = {}));
var Rlcer502ApplicationJsonErrorDescriptionEnum;
(function (Rlcer502ApplicationJsonErrorDescriptionEnum) {
    Rlcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rlcer502ApplicationJsonErrorDescriptionEnum = exports.Rlcer502ApplicationJsonErrorDescriptionEnum || (exports.Rlcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer502ApplicationJson, _super);
    function Rlcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rlcer502ApplicationJson = Rlcer502ApplicationJson;
var Rlcer503ApplicationJsonErrorEnum;
(function (Rlcer503ApplicationJsonErrorEnum) {
    Rlcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rlcer503ApplicationJsonErrorEnum = exports.Rlcer503ApplicationJsonErrorEnum || (exports.Rlcer503ApplicationJsonErrorEnum = {}));
var Rlcer503ApplicationJsonErrorDescriptionEnum;
(function (Rlcer503ApplicationJsonErrorDescriptionEnum) {
    Rlcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rlcer503ApplicationJsonErrorDescriptionEnum = exports.Rlcer503ApplicationJsonErrorDescriptionEnum || (exports.Rlcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer503ApplicationJson, _super);
    function Rlcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rlcer503ApplicationJson = Rlcer503ApplicationJson;
var Rlcer504ApplicationJsonErrorEnum;
(function (Rlcer504ApplicationJsonErrorEnum) {
    Rlcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rlcer504ApplicationJsonErrorEnum = exports.Rlcer504ApplicationJsonErrorEnum || (exports.Rlcer504ApplicationJsonErrorEnum = {}));
var Rlcer504ApplicationJsonErrorDescriptionEnum;
(function (Rlcer504ApplicationJsonErrorDescriptionEnum) {
    Rlcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rlcer504ApplicationJsonErrorDescriptionEnum = exports.Rlcer504ApplicationJsonErrorDescriptionEnum || (exports.Rlcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rlcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rlcer504ApplicationJson, _super);
    function Rlcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rlcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rlcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rlcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rlcer504ApplicationJson = Rlcer504ApplicationJson;
var RlcerRequest = /** @class */ (function (_super) {
    __extends(RlcerRequest, _super);
    function RlcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RlcerRequestBody)
    ], RlcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RlcerSecurity)
    ], RlcerRequest.prototype, "security", void 0);
    return RlcerRequest;
}(utils_1.SpeakeasyBase));
exports.RlcerRequest = RlcerRequest;
var RlcerResponse = /** @class */ (function (_super) {
    __extends(RlcerResponse, _super);
    function RlcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RlcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RlcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rlcer400ApplicationJson)
    ], RlcerResponse.prototype, "rlcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rlcer401ApplicationJson)
    ], RlcerResponse.prototype, "rlcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rlcer404ApplicationJson)
    ], RlcerResponse.prototype, "rlcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rlcer500ApplicationJson)
    ], RlcerResponse.prototype, "rlcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rlcer502ApplicationJson)
    ], RlcerResponse.prototype, "rlcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rlcer503ApplicationJson)
    ], RlcerResponse.prototype, "rlcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rlcer504ApplicationJson)
    ], RlcerResponse.prototype, "rlcer504ApplicationJSONObject", void 0);
    return RlcerResponse;
}(utils_1.SpeakeasyBase));
exports.RlcerResponse = RlcerResponse;
