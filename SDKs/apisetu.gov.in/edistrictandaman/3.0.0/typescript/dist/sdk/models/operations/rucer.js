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
exports.RucerResponse = exports.RucerRequest = exports.Rucer504ApplicationJson = exports.Rucer504ApplicationJsonErrorDescriptionEnum = exports.Rucer504ApplicationJsonErrorEnum = exports.Rucer503ApplicationJson = exports.Rucer503ApplicationJsonErrorDescriptionEnum = exports.Rucer503ApplicationJsonErrorEnum = exports.Rucer502ApplicationJson = exports.Rucer502ApplicationJsonErrorDescriptionEnum = exports.Rucer502ApplicationJsonErrorEnum = exports.Rucer500ApplicationJson = exports.Rucer500ApplicationJsonErrorDescriptionEnum = exports.Rucer500ApplicationJsonErrorEnum = exports.Rucer404ApplicationJson = exports.Rucer404ApplicationJsonErrorDescriptionEnum = exports.Rucer404ApplicationJsonErrorEnum = exports.Rucer401ApplicationJson = exports.Rucer401ApplicationJsonErrorDescriptionEnum = exports.Rucer401ApplicationJsonErrorEnum = exports.Rucer400ApplicationJson = exports.Rucer400ApplicationJsonErrorDescriptionEnum = exports.Rucer400ApplicationJsonErrorEnum = exports.RucerSecurity = exports.RucerRequestBody = exports.RucerRequestBodyFormatEnum = exports.RucerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RucerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RucerRequestBodyCertificateParameters, _super);
    function RucerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CertificateNumber" }),
        __metadata("design:type", String)
    ], RucerRequestBodyCertificateParameters.prototype, "certificateNumber", void 0);
    return RucerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RucerRequestBodyCertificateParameters = RucerRequestBodyCertificateParameters;
var RucerRequestBodyFormatEnum;
(function (RucerRequestBodyFormatEnum) {
    RucerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RucerRequestBodyFormatEnum = exports.RucerRequestBodyFormatEnum || (exports.RucerRequestBodyFormatEnum = {}));
var RucerRequestBody = /** @class */ (function (_super) {
    __extends(RucerRequestBody, _super);
    function RucerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RucerRequestBodyCertificateParameters)
    ], RucerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RucerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RucerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RucerRequestBody.prototype, "txnId", void 0);
    return RucerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RucerRequestBody = RucerRequestBody;
var RucerSecurity = /** @class */ (function (_super) {
    __extends(RucerSecurity, _super);
    function RucerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RucerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RucerSecurity.prototype, "clientId", void 0);
    return RucerSecurity;
}(utils_1.SpeakeasyBase));
exports.RucerSecurity = RucerSecurity;
var Rucer400ApplicationJsonErrorEnum;
(function (Rucer400ApplicationJsonErrorEnum) {
    Rucer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rucer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rucer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rucer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rucer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rucer400ApplicationJsonErrorEnum = exports.Rucer400ApplicationJsonErrorEnum || (exports.Rucer400ApplicationJsonErrorEnum = {}));
var Rucer400ApplicationJsonErrorDescriptionEnum;
(function (Rucer400ApplicationJsonErrorDescriptionEnum) {
    Rucer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rucer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rucer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rucer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rucer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rucer400ApplicationJsonErrorDescriptionEnum = exports.Rucer400ApplicationJsonErrorDescriptionEnum || (exports.Rucer400ApplicationJsonErrorDescriptionEnum = {}));
var Rucer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer400ApplicationJson, _super);
    function Rucer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rucer400ApplicationJson = Rucer400ApplicationJson;
var Rucer401ApplicationJsonErrorEnum;
(function (Rucer401ApplicationJsonErrorEnum) {
    Rucer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rucer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rucer401ApplicationJsonErrorEnum = exports.Rucer401ApplicationJsonErrorEnum || (exports.Rucer401ApplicationJsonErrorEnum = {}));
var Rucer401ApplicationJsonErrorDescriptionEnum;
(function (Rucer401ApplicationJsonErrorDescriptionEnum) {
    Rucer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rucer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rucer401ApplicationJsonErrorDescriptionEnum = exports.Rucer401ApplicationJsonErrorDescriptionEnum || (exports.Rucer401ApplicationJsonErrorDescriptionEnum = {}));
var Rucer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer401ApplicationJson, _super);
    function Rucer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rucer401ApplicationJson = Rucer401ApplicationJson;
var Rucer404ApplicationJsonErrorEnum;
(function (Rucer404ApplicationJsonErrorEnum) {
    Rucer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rucer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rucer404ApplicationJsonErrorEnum = exports.Rucer404ApplicationJsonErrorEnum || (exports.Rucer404ApplicationJsonErrorEnum = {}));
var Rucer404ApplicationJsonErrorDescriptionEnum;
(function (Rucer404ApplicationJsonErrorDescriptionEnum) {
    Rucer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rucer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rucer404ApplicationJsonErrorDescriptionEnum = exports.Rucer404ApplicationJsonErrorDescriptionEnum || (exports.Rucer404ApplicationJsonErrorDescriptionEnum = {}));
var Rucer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer404ApplicationJson, _super);
    function Rucer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rucer404ApplicationJson = Rucer404ApplicationJson;
var Rucer500ApplicationJsonErrorEnum;
(function (Rucer500ApplicationJsonErrorEnum) {
    Rucer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rucer500ApplicationJsonErrorEnum = exports.Rucer500ApplicationJsonErrorEnum || (exports.Rucer500ApplicationJsonErrorEnum = {}));
var Rucer500ApplicationJsonErrorDescriptionEnum;
(function (Rucer500ApplicationJsonErrorDescriptionEnum) {
    Rucer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rucer500ApplicationJsonErrorDescriptionEnum = exports.Rucer500ApplicationJsonErrorDescriptionEnum || (exports.Rucer500ApplicationJsonErrorDescriptionEnum = {}));
var Rucer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer500ApplicationJson, _super);
    function Rucer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rucer500ApplicationJson = Rucer500ApplicationJson;
var Rucer502ApplicationJsonErrorEnum;
(function (Rucer502ApplicationJsonErrorEnum) {
    Rucer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rucer502ApplicationJsonErrorEnum = exports.Rucer502ApplicationJsonErrorEnum || (exports.Rucer502ApplicationJsonErrorEnum = {}));
var Rucer502ApplicationJsonErrorDescriptionEnum;
(function (Rucer502ApplicationJsonErrorDescriptionEnum) {
    Rucer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rucer502ApplicationJsonErrorDescriptionEnum = exports.Rucer502ApplicationJsonErrorDescriptionEnum || (exports.Rucer502ApplicationJsonErrorDescriptionEnum = {}));
var Rucer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer502ApplicationJson, _super);
    function Rucer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rucer502ApplicationJson = Rucer502ApplicationJson;
var Rucer503ApplicationJsonErrorEnum;
(function (Rucer503ApplicationJsonErrorEnum) {
    Rucer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rucer503ApplicationJsonErrorEnum = exports.Rucer503ApplicationJsonErrorEnum || (exports.Rucer503ApplicationJsonErrorEnum = {}));
var Rucer503ApplicationJsonErrorDescriptionEnum;
(function (Rucer503ApplicationJsonErrorDescriptionEnum) {
    Rucer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rucer503ApplicationJsonErrorDescriptionEnum = exports.Rucer503ApplicationJsonErrorDescriptionEnum || (exports.Rucer503ApplicationJsonErrorDescriptionEnum = {}));
var Rucer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer503ApplicationJson, _super);
    function Rucer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rucer503ApplicationJson = Rucer503ApplicationJson;
var Rucer504ApplicationJsonErrorEnum;
(function (Rucer504ApplicationJsonErrorEnum) {
    Rucer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rucer504ApplicationJsonErrorEnum = exports.Rucer504ApplicationJsonErrorEnum || (exports.Rucer504ApplicationJsonErrorEnum = {}));
var Rucer504ApplicationJsonErrorDescriptionEnum;
(function (Rucer504ApplicationJsonErrorDescriptionEnum) {
    Rucer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rucer504ApplicationJsonErrorDescriptionEnum = exports.Rucer504ApplicationJsonErrorDescriptionEnum || (exports.Rucer504ApplicationJsonErrorDescriptionEnum = {}));
var Rucer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rucer504ApplicationJson, _super);
    function Rucer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rucer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rucer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rucer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rucer504ApplicationJson = Rucer504ApplicationJson;
var RucerRequest = /** @class */ (function (_super) {
    __extends(RucerRequest, _super);
    function RucerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RucerRequestBody)
    ], RucerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RucerSecurity)
    ], RucerRequest.prototype, "security", void 0);
    return RucerRequest;
}(utils_1.SpeakeasyBase));
exports.RucerRequest = RucerRequest;
var RucerResponse = /** @class */ (function (_super) {
    __extends(RucerResponse, _super);
    function RucerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RucerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RucerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rucer400ApplicationJson)
    ], RucerResponse.prototype, "rucer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rucer401ApplicationJson)
    ], RucerResponse.prototype, "rucer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rucer404ApplicationJson)
    ], RucerResponse.prototype, "rucer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rucer500ApplicationJson)
    ], RucerResponse.prototype, "rucer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rucer502ApplicationJson)
    ], RucerResponse.prototype, "rucer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rucer503ApplicationJson)
    ], RucerResponse.prototype, "rucer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rucer504ApplicationJson)
    ], RucerResponse.prototype, "rucer504ApplicationJSONObject", void 0);
    return RucerResponse;
}(utils_1.SpeakeasyBase));
exports.RucerResponse = RucerResponse;
