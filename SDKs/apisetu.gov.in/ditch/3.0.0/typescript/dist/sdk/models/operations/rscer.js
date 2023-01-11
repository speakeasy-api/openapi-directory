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
exports.RscerResponse = exports.RscerRequest = exports.Rscer504ApplicationJson = exports.Rscer504ApplicationJsonErrorDescriptionEnum = exports.Rscer504ApplicationJsonErrorEnum = exports.Rscer503ApplicationJson = exports.Rscer503ApplicationJsonErrorDescriptionEnum = exports.Rscer503ApplicationJsonErrorEnum = exports.Rscer502ApplicationJson = exports.Rscer502ApplicationJsonErrorDescriptionEnum = exports.Rscer502ApplicationJsonErrorEnum = exports.Rscer500ApplicationJson = exports.Rscer500ApplicationJsonErrorDescriptionEnum = exports.Rscer500ApplicationJsonErrorEnum = exports.Rscer404ApplicationJson = exports.Rscer404ApplicationJsonErrorDescriptionEnum = exports.Rscer404ApplicationJsonErrorEnum = exports.Rscer401ApplicationJson = exports.Rscer401ApplicationJsonErrorDescriptionEnum = exports.Rscer401ApplicationJsonErrorEnum = exports.Rscer400ApplicationJson = exports.Rscer400ApplicationJsonErrorDescriptionEnum = exports.Rscer400ApplicationJsonErrorEnum = exports.RscerSecurity = exports.RscerRequestBody = exports.RscerRequestBodyFormatEnum = exports.RscerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RscerRequestBodyCertificateParameters, _super);
    function RscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=APPNO" }),
        __metadata("design:type", String)
    ], RscerRequestBodyCertificateParameters.prototype, "appno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CERTNO" }),
        __metadata("design:type", String)
    ], RscerRequestBodyCertificateParameters.prototype, "certno", void 0);
    return RscerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RscerRequestBodyCertificateParameters = RscerRequestBodyCertificateParameters;
var RscerRequestBodyFormatEnum;
(function (RscerRequestBodyFormatEnum) {
    RscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RscerRequestBodyFormatEnum = exports.RscerRequestBodyFormatEnum || (exports.RscerRequestBodyFormatEnum = {}));
var RscerRequestBody = /** @class */ (function (_super) {
    __extends(RscerRequestBody, _super);
    function RscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RscerRequestBodyCertificateParameters)
    ], RscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RscerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RscerRequestBody.prototype, "txnId", void 0);
    return RscerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RscerRequestBody = RscerRequestBody;
var RscerSecurity = /** @class */ (function (_super) {
    __extends(RscerSecurity, _super);
    function RscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RscerSecurity.prototype, "clientId", void 0);
    return RscerSecurity;
}(utils_1.SpeakeasyBase));
exports.RscerSecurity = RscerSecurity;
var Rscer400ApplicationJsonErrorEnum;
(function (Rscer400ApplicationJsonErrorEnum) {
    Rscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rscer400ApplicationJsonErrorEnum = exports.Rscer400ApplicationJsonErrorEnum || (exports.Rscer400ApplicationJsonErrorEnum = {}));
var Rscer400ApplicationJsonErrorDescriptionEnum;
(function (Rscer400ApplicationJsonErrorDescriptionEnum) {
    Rscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rscer400ApplicationJsonErrorDescriptionEnum = exports.Rscer400ApplicationJsonErrorDescriptionEnum || (exports.Rscer400ApplicationJsonErrorDescriptionEnum = {}));
var Rscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer400ApplicationJson, _super);
    function Rscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rscer400ApplicationJson = Rscer400ApplicationJson;
var Rscer401ApplicationJsonErrorEnum;
(function (Rscer401ApplicationJsonErrorEnum) {
    Rscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rscer401ApplicationJsonErrorEnum = exports.Rscer401ApplicationJsonErrorEnum || (exports.Rscer401ApplicationJsonErrorEnum = {}));
var Rscer401ApplicationJsonErrorDescriptionEnum;
(function (Rscer401ApplicationJsonErrorDescriptionEnum) {
    Rscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rscer401ApplicationJsonErrorDescriptionEnum = exports.Rscer401ApplicationJsonErrorDescriptionEnum || (exports.Rscer401ApplicationJsonErrorDescriptionEnum = {}));
var Rscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer401ApplicationJson, _super);
    function Rscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rscer401ApplicationJson = Rscer401ApplicationJson;
var Rscer404ApplicationJsonErrorEnum;
(function (Rscer404ApplicationJsonErrorEnum) {
    Rscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rscer404ApplicationJsonErrorEnum = exports.Rscer404ApplicationJsonErrorEnum || (exports.Rscer404ApplicationJsonErrorEnum = {}));
var Rscer404ApplicationJsonErrorDescriptionEnum;
(function (Rscer404ApplicationJsonErrorDescriptionEnum) {
    Rscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rscer404ApplicationJsonErrorDescriptionEnum = exports.Rscer404ApplicationJsonErrorDescriptionEnum || (exports.Rscer404ApplicationJsonErrorDescriptionEnum = {}));
var Rscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer404ApplicationJson, _super);
    function Rscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rscer404ApplicationJson = Rscer404ApplicationJson;
var Rscer500ApplicationJsonErrorEnum;
(function (Rscer500ApplicationJsonErrorEnum) {
    Rscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rscer500ApplicationJsonErrorEnum = exports.Rscer500ApplicationJsonErrorEnum || (exports.Rscer500ApplicationJsonErrorEnum = {}));
var Rscer500ApplicationJsonErrorDescriptionEnum;
(function (Rscer500ApplicationJsonErrorDescriptionEnum) {
    Rscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rscer500ApplicationJsonErrorDescriptionEnum = exports.Rscer500ApplicationJsonErrorDescriptionEnum || (exports.Rscer500ApplicationJsonErrorDescriptionEnum = {}));
var Rscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer500ApplicationJson, _super);
    function Rscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rscer500ApplicationJson = Rscer500ApplicationJson;
var Rscer502ApplicationJsonErrorEnum;
(function (Rscer502ApplicationJsonErrorEnum) {
    Rscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rscer502ApplicationJsonErrorEnum = exports.Rscer502ApplicationJsonErrorEnum || (exports.Rscer502ApplicationJsonErrorEnum = {}));
var Rscer502ApplicationJsonErrorDescriptionEnum;
(function (Rscer502ApplicationJsonErrorDescriptionEnum) {
    Rscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rscer502ApplicationJsonErrorDescriptionEnum = exports.Rscer502ApplicationJsonErrorDescriptionEnum || (exports.Rscer502ApplicationJsonErrorDescriptionEnum = {}));
var Rscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer502ApplicationJson, _super);
    function Rscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rscer502ApplicationJson = Rscer502ApplicationJson;
var Rscer503ApplicationJsonErrorEnum;
(function (Rscer503ApplicationJsonErrorEnum) {
    Rscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rscer503ApplicationJsonErrorEnum = exports.Rscer503ApplicationJsonErrorEnum || (exports.Rscer503ApplicationJsonErrorEnum = {}));
var Rscer503ApplicationJsonErrorDescriptionEnum;
(function (Rscer503ApplicationJsonErrorDescriptionEnum) {
    Rscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rscer503ApplicationJsonErrorDescriptionEnum = exports.Rscer503ApplicationJsonErrorDescriptionEnum || (exports.Rscer503ApplicationJsonErrorDescriptionEnum = {}));
var Rscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer503ApplicationJson, _super);
    function Rscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rscer503ApplicationJson = Rscer503ApplicationJson;
var Rscer504ApplicationJsonErrorEnum;
(function (Rscer504ApplicationJsonErrorEnum) {
    Rscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rscer504ApplicationJsonErrorEnum = exports.Rscer504ApplicationJsonErrorEnum || (exports.Rscer504ApplicationJsonErrorEnum = {}));
var Rscer504ApplicationJsonErrorDescriptionEnum;
(function (Rscer504ApplicationJsonErrorDescriptionEnum) {
    Rscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rscer504ApplicationJsonErrorDescriptionEnum = exports.Rscer504ApplicationJsonErrorDescriptionEnum || (exports.Rscer504ApplicationJsonErrorDescriptionEnum = {}));
var Rscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rscer504ApplicationJson, _super);
    function Rscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rscer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rscer504ApplicationJson = Rscer504ApplicationJson;
var RscerRequest = /** @class */ (function (_super) {
    __extends(RscerRequest, _super);
    function RscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RscerRequestBody)
    ], RscerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RscerSecurity)
    ], RscerRequest.prototype, "security", void 0);
    return RscerRequest;
}(utils_1.SpeakeasyBase));
exports.RscerRequest = RscerRequest;
var RscerResponse = /** @class */ (function (_super) {
    __extends(RscerResponse, _super);
    function RscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RscerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RscerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rscer400ApplicationJson)
    ], RscerResponse.prototype, "rscer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rscer401ApplicationJson)
    ], RscerResponse.prototype, "rscer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rscer404ApplicationJson)
    ], RscerResponse.prototype, "rscer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rscer500ApplicationJson)
    ], RscerResponse.prototype, "rscer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rscer502ApplicationJson)
    ], RscerResponse.prototype, "rscer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rscer503ApplicationJson)
    ], RscerResponse.prototype, "rscer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rscer504ApplicationJson)
    ], RscerResponse.prototype, "rscer504ApplicationJSONObject", void 0);
    return RscerResponse;
}(utils_1.SpeakeasyBase));
exports.RscerResponse = RscerResponse;
