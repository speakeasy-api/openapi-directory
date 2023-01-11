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
exports.RacerResponse = exports.RacerRequest = exports.Racer504ApplicationJson = exports.Racer504ApplicationJsonErrorDescriptionEnum = exports.Racer504ApplicationJsonErrorEnum = exports.Racer503ApplicationJson = exports.Racer503ApplicationJsonErrorDescriptionEnum = exports.Racer503ApplicationJsonErrorEnum = exports.Racer502ApplicationJson = exports.Racer502ApplicationJsonErrorDescriptionEnum = exports.Racer502ApplicationJsonErrorEnum = exports.Racer500ApplicationJson = exports.Racer500ApplicationJsonErrorDescriptionEnum = exports.Racer500ApplicationJsonErrorEnum = exports.Racer404ApplicationJson = exports.Racer404ApplicationJsonErrorDescriptionEnum = exports.Racer404ApplicationJsonErrorEnum = exports.Racer401ApplicationJson = exports.Racer401ApplicationJsonErrorDescriptionEnum = exports.Racer401ApplicationJsonErrorEnum = exports.Racer400ApplicationJson = exports.Racer400ApplicationJsonErrorDescriptionEnum = exports.Racer400ApplicationJsonErrorEnum = exports.RacerSecurity = exports.RacerRequestBody = exports.RacerRequestBodyFormatEnum = exports.RacerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RacerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RacerRequestBodyCertificateParameters, _super);
    function RacerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], RacerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return RacerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RacerRequestBodyCertificateParameters = RacerRequestBodyCertificateParameters;
var RacerRequestBodyFormatEnum;
(function (RacerRequestBodyFormatEnum) {
    RacerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RacerRequestBodyFormatEnum = exports.RacerRequestBodyFormatEnum || (exports.RacerRequestBodyFormatEnum = {}));
var RacerRequestBody = /** @class */ (function (_super) {
    __extends(RacerRequestBody, _super);
    function RacerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RacerRequestBodyCertificateParameters)
    ], RacerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RacerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RacerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RacerRequestBody.prototype, "txnId", void 0);
    return RacerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RacerRequestBody = RacerRequestBody;
var RacerSecurity = /** @class */ (function (_super) {
    __extends(RacerSecurity, _super);
    function RacerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RacerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RacerSecurity.prototype, "clientId", void 0);
    return RacerSecurity;
}(utils_1.SpeakeasyBase));
exports.RacerSecurity = RacerSecurity;
var Racer400ApplicationJsonErrorEnum;
(function (Racer400ApplicationJsonErrorEnum) {
    Racer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Racer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Racer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Racer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Racer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Racer400ApplicationJsonErrorEnum = exports.Racer400ApplicationJsonErrorEnum || (exports.Racer400ApplicationJsonErrorEnum = {}));
var Racer400ApplicationJsonErrorDescriptionEnum;
(function (Racer400ApplicationJsonErrorDescriptionEnum) {
    Racer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Racer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Racer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Racer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Racer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Racer400ApplicationJsonErrorDescriptionEnum = exports.Racer400ApplicationJsonErrorDescriptionEnum || (exports.Racer400ApplicationJsonErrorDescriptionEnum = {}));
var Racer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Racer400ApplicationJson, _super);
    function Racer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Racer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Racer400ApplicationJson.prototype, "errorDescription", void 0);
    return Racer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Racer400ApplicationJson = Racer400ApplicationJson;
var Racer401ApplicationJsonErrorEnum;
(function (Racer401ApplicationJsonErrorEnum) {
    Racer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Racer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Racer401ApplicationJsonErrorEnum = exports.Racer401ApplicationJsonErrorEnum || (exports.Racer401ApplicationJsonErrorEnum = {}));
var Racer401ApplicationJsonErrorDescriptionEnum;
(function (Racer401ApplicationJsonErrorDescriptionEnum) {
    Racer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Racer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Racer401ApplicationJsonErrorDescriptionEnum = exports.Racer401ApplicationJsonErrorDescriptionEnum || (exports.Racer401ApplicationJsonErrorDescriptionEnum = {}));
var Racer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Racer401ApplicationJson, _super);
    function Racer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Racer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Racer401ApplicationJson.prototype, "errorDescription", void 0);
    return Racer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Racer401ApplicationJson = Racer401ApplicationJson;
var Racer404ApplicationJsonErrorEnum;
(function (Racer404ApplicationJsonErrorEnum) {
    Racer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Racer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Racer404ApplicationJsonErrorEnum = exports.Racer404ApplicationJsonErrorEnum || (exports.Racer404ApplicationJsonErrorEnum = {}));
var Racer404ApplicationJsonErrorDescriptionEnum;
(function (Racer404ApplicationJsonErrorDescriptionEnum) {
    Racer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Racer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Racer404ApplicationJsonErrorDescriptionEnum = exports.Racer404ApplicationJsonErrorDescriptionEnum || (exports.Racer404ApplicationJsonErrorDescriptionEnum = {}));
var Racer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Racer404ApplicationJson, _super);
    function Racer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Racer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Racer404ApplicationJson.prototype, "errorDescription", void 0);
    return Racer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Racer404ApplicationJson = Racer404ApplicationJson;
var Racer500ApplicationJsonErrorEnum;
(function (Racer500ApplicationJsonErrorEnum) {
    Racer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Racer500ApplicationJsonErrorEnum = exports.Racer500ApplicationJsonErrorEnum || (exports.Racer500ApplicationJsonErrorEnum = {}));
var Racer500ApplicationJsonErrorDescriptionEnum;
(function (Racer500ApplicationJsonErrorDescriptionEnum) {
    Racer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Racer500ApplicationJsonErrorDescriptionEnum = exports.Racer500ApplicationJsonErrorDescriptionEnum || (exports.Racer500ApplicationJsonErrorDescriptionEnum = {}));
var Racer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Racer500ApplicationJson, _super);
    function Racer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Racer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Racer500ApplicationJson.prototype, "errorDescription", void 0);
    return Racer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Racer500ApplicationJson = Racer500ApplicationJson;
var Racer502ApplicationJsonErrorEnum;
(function (Racer502ApplicationJsonErrorEnum) {
    Racer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Racer502ApplicationJsonErrorEnum = exports.Racer502ApplicationJsonErrorEnum || (exports.Racer502ApplicationJsonErrorEnum = {}));
var Racer502ApplicationJsonErrorDescriptionEnum;
(function (Racer502ApplicationJsonErrorDescriptionEnum) {
    Racer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Racer502ApplicationJsonErrorDescriptionEnum = exports.Racer502ApplicationJsonErrorDescriptionEnum || (exports.Racer502ApplicationJsonErrorDescriptionEnum = {}));
var Racer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Racer502ApplicationJson, _super);
    function Racer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Racer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Racer502ApplicationJson.prototype, "errorDescription", void 0);
    return Racer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Racer502ApplicationJson = Racer502ApplicationJson;
var Racer503ApplicationJsonErrorEnum;
(function (Racer503ApplicationJsonErrorEnum) {
    Racer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Racer503ApplicationJsonErrorEnum = exports.Racer503ApplicationJsonErrorEnum || (exports.Racer503ApplicationJsonErrorEnum = {}));
var Racer503ApplicationJsonErrorDescriptionEnum;
(function (Racer503ApplicationJsonErrorDescriptionEnum) {
    Racer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Racer503ApplicationJsonErrorDescriptionEnum = exports.Racer503ApplicationJsonErrorDescriptionEnum || (exports.Racer503ApplicationJsonErrorDescriptionEnum = {}));
var Racer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Racer503ApplicationJson, _super);
    function Racer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Racer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Racer503ApplicationJson.prototype, "errorDescription", void 0);
    return Racer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Racer503ApplicationJson = Racer503ApplicationJson;
var Racer504ApplicationJsonErrorEnum;
(function (Racer504ApplicationJsonErrorEnum) {
    Racer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Racer504ApplicationJsonErrorEnum = exports.Racer504ApplicationJsonErrorEnum || (exports.Racer504ApplicationJsonErrorEnum = {}));
var Racer504ApplicationJsonErrorDescriptionEnum;
(function (Racer504ApplicationJsonErrorDescriptionEnum) {
    Racer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Racer504ApplicationJsonErrorDescriptionEnum = exports.Racer504ApplicationJsonErrorDescriptionEnum || (exports.Racer504ApplicationJsonErrorDescriptionEnum = {}));
var Racer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Racer504ApplicationJson, _super);
    function Racer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Racer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Racer504ApplicationJson.prototype, "errorDescription", void 0);
    return Racer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Racer504ApplicationJson = Racer504ApplicationJson;
var RacerRequest = /** @class */ (function (_super) {
    __extends(RacerRequest, _super);
    function RacerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RacerRequestBody)
    ], RacerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RacerSecurity)
    ], RacerRequest.prototype, "security", void 0);
    return RacerRequest;
}(utils_1.SpeakeasyBase));
exports.RacerRequest = RacerRequest;
var RacerResponse = /** @class */ (function (_super) {
    __extends(RacerResponse, _super);
    function RacerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RacerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RacerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Racer400ApplicationJson)
    ], RacerResponse.prototype, "racer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Racer401ApplicationJson)
    ], RacerResponse.prototype, "racer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Racer404ApplicationJson)
    ], RacerResponse.prototype, "racer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Racer500ApplicationJson)
    ], RacerResponse.prototype, "racer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Racer502ApplicationJson)
    ], RacerResponse.prototype, "racer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Racer503ApplicationJson)
    ], RacerResponse.prototype, "racer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Racer504ApplicationJson)
    ], RacerResponse.prototype, "racer504ApplicationJSONObject", void 0);
    return RacerResponse;
}(utils_1.SpeakeasyBase));
exports.RacerResponse = RacerResponse;
