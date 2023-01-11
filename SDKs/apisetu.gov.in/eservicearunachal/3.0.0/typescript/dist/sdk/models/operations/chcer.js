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
exports.ChcerResponse = exports.ChcerRequest = exports.Chcer504ApplicationJson = exports.Chcer504ApplicationJsonErrorDescriptionEnum = exports.Chcer504ApplicationJsonErrorEnum = exports.Chcer503ApplicationJson = exports.Chcer503ApplicationJsonErrorDescriptionEnum = exports.Chcer503ApplicationJsonErrorEnum = exports.Chcer502ApplicationJson = exports.Chcer502ApplicationJsonErrorDescriptionEnum = exports.Chcer502ApplicationJsonErrorEnum = exports.Chcer500ApplicationJson = exports.Chcer500ApplicationJsonErrorDescriptionEnum = exports.Chcer500ApplicationJsonErrorEnum = exports.Chcer404ApplicationJson = exports.Chcer404ApplicationJsonErrorDescriptionEnum = exports.Chcer404ApplicationJsonErrorEnum = exports.Chcer401ApplicationJson = exports.Chcer401ApplicationJsonErrorDescriptionEnum = exports.Chcer401ApplicationJsonErrorEnum = exports.Chcer400ApplicationJson = exports.Chcer400ApplicationJsonErrorDescriptionEnum = exports.Chcer400ApplicationJsonErrorEnum = exports.ChcerSecurity = exports.ChcerRequestBody = exports.ChcerRequestBodyFormatEnum = exports.ChcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ChcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ChcerRequestBodyCertificateParameters, _super);
    function ChcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], ChcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], ChcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], ChcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return ChcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.ChcerRequestBodyCertificateParameters = ChcerRequestBodyCertificateParameters;
var ChcerRequestBodyFormatEnum;
(function (ChcerRequestBodyFormatEnum) {
    ChcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ChcerRequestBodyFormatEnum = exports.ChcerRequestBodyFormatEnum || (exports.ChcerRequestBodyFormatEnum = {}));
var ChcerRequestBody = /** @class */ (function (_super) {
    __extends(ChcerRequestBody, _super);
    function ChcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ChcerRequestBodyCertificateParameters)
    ], ChcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ChcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ChcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ChcerRequestBody.prototype, "txnId", void 0);
    return ChcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.ChcerRequestBody = ChcerRequestBody;
var ChcerSecurity = /** @class */ (function (_super) {
    __extends(ChcerSecurity, _super);
    function ChcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ChcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ChcerSecurity.prototype, "clientId", void 0);
    return ChcerSecurity;
}(utils_1.SpeakeasyBase));
exports.ChcerSecurity = ChcerSecurity;
var Chcer400ApplicationJsonErrorEnum;
(function (Chcer400ApplicationJsonErrorEnum) {
    Chcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Chcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Chcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Chcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Chcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Chcer400ApplicationJsonErrorEnum = exports.Chcer400ApplicationJsonErrorEnum || (exports.Chcer400ApplicationJsonErrorEnum = {}));
var Chcer400ApplicationJsonErrorDescriptionEnum;
(function (Chcer400ApplicationJsonErrorDescriptionEnum) {
    Chcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Chcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Chcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Chcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Chcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Chcer400ApplicationJsonErrorDescriptionEnum = exports.Chcer400ApplicationJsonErrorDescriptionEnum || (exports.Chcer400ApplicationJsonErrorDescriptionEnum = {}));
var Chcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Chcer400ApplicationJson, _super);
    function Chcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Chcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Chcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Chcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Chcer400ApplicationJson = Chcer400ApplicationJson;
var Chcer401ApplicationJsonErrorEnum;
(function (Chcer401ApplicationJsonErrorEnum) {
    Chcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Chcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Chcer401ApplicationJsonErrorEnum = exports.Chcer401ApplicationJsonErrorEnum || (exports.Chcer401ApplicationJsonErrorEnum = {}));
var Chcer401ApplicationJsonErrorDescriptionEnum;
(function (Chcer401ApplicationJsonErrorDescriptionEnum) {
    Chcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Chcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Chcer401ApplicationJsonErrorDescriptionEnum = exports.Chcer401ApplicationJsonErrorDescriptionEnum || (exports.Chcer401ApplicationJsonErrorDescriptionEnum = {}));
var Chcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Chcer401ApplicationJson, _super);
    function Chcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Chcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Chcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Chcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Chcer401ApplicationJson = Chcer401ApplicationJson;
var Chcer404ApplicationJsonErrorEnum;
(function (Chcer404ApplicationJsonErrorEnum) {
    Chcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Chcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Chcer404ApplicationJsonErrorEnum = exports.Chcer404ApplicationJsonErrorEnum || (exports.Chcer404ApplicationJsonErrorEnum = {}));
var Chcer404ApplicationJsonErrorDescriptionEnum;
(function (Chcer404ApplicationJsonErrorDescriptionEnum) {
    Chcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Chcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Chcer404ApplicationJsonErrorDescriptionEnum = exports.Chcer404ApplicationJsonErrorDescriptionEnum || (exports.Chcer404ApplicationJsonErrorDescriptionEnum = {}));
var Chcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Chcer404ApplicationJson, _super);
    function Chcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Chcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Chcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Chcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Chcer404ApplicationJson = Chcer404ApplicationJson;
var Chcer500ApplicationJsonErrorEnum;
(function (Chcer500ApplicationJsonErrorEnum) {
    Chcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Chcer500ApplicationJsonErrorEnum = exports.Chcer500ApplicationJsonErrorEnum || (exports.Chcer500ApplicationJsonErrorEnum = {}));
var Chcer500ApplicationJsonErrorDescriptionEnum;
(function (Chcer500ApplicationJsonErrorDescriptionEnum) {
    Chcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Chcer500ApplicationJsonErrorDescriptionEnum = exports.Chcer500ApplicationJsonErrorDescriptionEnum || (exports.Chcer500ApplicationJsonErrorDescriptionEnum = {}));
var Chcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Chcer500ApplicationJson, _super);
    function Chcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Chcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Chcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Chcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Chcer500ApplicationJson = Chcer500ApplicationJson;
var Chcer502ApplicationJsonErrorEnum;
(function (Chcer502ApplicationJsonErrorEnum) {
    Chcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Chcer502ApplicationJsonErrorEnum = exports.Chcer502ApplicationJsonErrorEnum || (exports.Chcer502ApplicationJsonErrorEnum = {}));
var Chcer502ApplicationJsonErrorDescriptionEnum;
(function (Chcer502ApplicationJsonErrorDescriptionEnum) {
    Chcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Chcer502ApplicationJsonErrorDescriptionEnum = exports.Chcer502ApplicationJsonErrorDescriptionEnum || (exports.Chcer502ApplicationJsonErrorDescriptionEnum = {}));
var Chcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Chcer502ApplicationJson, _super);
    function Chcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Chcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Chcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Chcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Chcer502ApplicationJson = Chcer502ApplicationJson;
var Chcer503ApplicationJsonErrorEnum;
(function (Chcer503ApplicationJsonErrorEnum) {
    Chcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Chcer503ApplicationJsonErrorEnum = exports.Chcer503ApplicationJsonErrorEnum || (exports.Chcer503ApplicationJsonErrorEnum = {}));
var Chcer503ApplicationJsonErrorDescriptionEnum;
(function (Chcer503ApplicationJsonErrorDescriptionEnum) {
    Chcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Chcer503ApplicationJsonErrorDescriptionEnum = exports.Chcer503ApplicationJsonErrorDescriptionEnum || (exports.Chcer503ApplicationJsonErrorDescriptionEnum = {}));
var Chcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Chcer503ApplicationJson, _super);
    function Chcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Chcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Chcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Chcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Chcer503ApplicationJson = Chcer503ApplicationJson;
var Chcer504ApplicationJsonErrorEnum;
(function (Chcer504ApplicationJsonErrorEnum) {
    Chcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Chcer504ApplicationJsonErrorEnum = exports.Chcer504ApplicationJsonErrorEnum || (exports.Chcer504ApplicationJsonErrorEnum = {}));
var Chcer504ApplicationJsonErrorDescriptionEnum;
(function (Chcer504ApplicationJsonErrorDescriptionEnum) {
    Chcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Chcer504ApplicationJsonErrorDescriptionEnum = exports.Chcer504ApplicationJsonErrorDescriptionEnum || (exports.Chcer504ApplicationJsonErrorDescriptionEnum = {}));
var Chcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Chcer504ApplicationJson, _super);
    function Chcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Chcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Chcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Chcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Chcer504ApplicationJson = Chcer504ApplicationJson;
var ChcerRequest = /** @class */ (function (_super) {
    __extends(ChcerRequest, _super);
    function ChcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChcerRequestBody)
    ], ChcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChcerSecurity)
    ], ChcerRequest.prototype, "security", void 0);
    return ChcerRequest;
}(utils_1.SpeakeasyBase));
exports.ChcerRequest = ChcerRequest;
var ChcerResponse = /** @class */ (function (_super) {
    __extends(ChcerResponse, _super);
    function ChcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ChcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ChcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Chcer400ApplicationJson)
    ], ChcerResponse.prototype, "chcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Chcer401ApplicationJson)
    ], ChcerResponse.prototype, "chcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Chcer404ApplicationJson)
    ], ChcerResponse.prototype, "chcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Chcer500ApplicationJson)
    ], ChcerResponse.prototype, "chcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Chcer502ApplicationJson)
    ], ChcerResponse.prototype, "chcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Chcer503ApplicationJson)
    ], ChcerResponse.prototype, "chcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Chcer504ApplicationJson)
    ], ChcerResponse.prototype, "chcer504ApplicationJSONObject", void 0);
    return ChcerResponse;
}(utils_1.SpeakeasyBase));
exports.ChcerResponse = ChcerResponse;
