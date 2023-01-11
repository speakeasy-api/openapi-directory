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
exports.MnrgaResponse = exports.MnrgaRequest = exports.Mnrga504ApplicationJson = exports.Mnrga504ApplicationJsonErrorDescriptionEnum = exports.Mnrga504ApplicationJsonErrorEnum = exports.Mnrga503ApplicationJson = exports.Mnrga503ApplicationJsonErrorDescriptionEnum = exports.Mnrga503ApplicationJsonErrorEnum = exports.Mnrga502ApplicationJson = exports.Mnrga502ApplicationJsonErrorDescriptionEnum = exports.Mnrga502ApplicationJsonErrorEnum = exports.Mnrga500ApplicationJson = exports.Mnrga500ApplicationJsonErrorDescriptionEnum = exports.Mnrga500ApplicationJsonErrorEnum = exports.Mnrga404ApplicationJson = exports.Mnrga404ApplicationJsonErrorDescriptionEnum = exports.Mnrga404ApplicationJsonErrorEnum = exports.Mnrga401ApplicationJson = exports.Mnrga401ApplicationJsonErrorDescriptionEnum = exports.Mnrga401ApplicationJsonErrorEnum = exports.Mnrga400ApplicationJson = exports.Mnrga400ApplicationJsonErrorDescriptionEnum = exports.Mnrga400ApplicationJsonErrorEnum = exports.MnrgaSecurity = exports.MnrgaRequestBody = exports.MnrgaRequestBodyFormatEnum = exports.MnrgaRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MnrgaRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MnrgaRequestBodyCertificateParameters, _super);
    function MnrgaRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], MnrgaRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return MnrgaRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MnrgaRequestBodyCertificateParameters = MnrgaRequestBodyCertificateParameters;
var MnrgaRequestBodyFormatEnum;
(function (MnrgaRequestBodyFormatEnum) {
    MnrgaRequestBodyFormatEnum["Pdf"] = "pdf";
})(MnrgaRequestBodyFormatEnum = exports.MnrgaRequestBodyFormatEnum || (exports.MnrgaRequestBodyFormatEnum = {}));
var MnrgaRequestBody = /** @class */ (function (_super) {
    __extends(MnrgaRequestBody, _super);
    function MnrgaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MnrgaRequestBodyCertificateParameters)
    ], MnrgaRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MnrgaRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MnrgaRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MnrgaRequestBody.prototype, "txnId", void 0);
    return MnrgaRequestBody;
}(utils_1.SpeakeasyBase));
exports.MnrgaRequestBody = MnrgaRequestBody;
var MnrgaSecurity = /** @class */ (function (_super) {
    __extends(MnrgaSecurity, _super);
    function MnrgaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MnrgaSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MnrgaSecurity.prototype, "clientId", void 0);
    return MnrgaSecurity;
}(utils_1.SpeakeasyBase));
exports.MnrgaSecurity = MnrgaSecurity;
var Mnrga400ApplicationJsonErrorEnum;
(function (Mnrga400ApplicationJsonErrorEnum) {
    Mnrga400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mnrga400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mnrga400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mnrga400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mnrga400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mnrga400ApplicationJsonErrorEnum = exports.Mnrga400ApplicationJsonErrorEnum || (exports.Mnrga400ApplicationJsonErrorEnum = {}));
var Mnrga400ApplicationJsonErrorDescriptionEnum;
(function (Mnrga400ApplicationJsonErrorDescriptionEnum) {
    Mnrga400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mnrga400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mnrga400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mnrga400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mnrga400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mnrga400ApplicationJsonErrorDescriptionEnum = exports.Mnrga400ApplicationJsonErrorDescriptionEnum || (exports.Mnrga400ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga400ApplicationJson, _super);
    function Mnrga400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga400ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mnrga400ApplicationJson = Mnrga400ApplicationJson;
var Mnrga401ApplicationJsonErrorEnum;
(function (Mnrga401ApplicationJsonErrorEnum) {
    Mnrga401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mnrga401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mnrga401ApplicationJsonErrorEnum = exports.Mnrga401ApplicationJsonErrorEnum || (exports.Mnrga401ApplicationJsonErrorEnum = {}));
var Mnrga401ApplicationJsonErrorDescriptionEnum;
(function (Mnrga401ApplicationJsonErrorDescriptionEnum) {
    Mnrga401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mnrga401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mnrga401ApplicationJsonErrorDescriptionEnum = exports.Mnrga401ApplicationJsonErrorDescriptionEnum || (exports.Mnrga401ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga401ApplicationJson, _super);
    function Mnrga401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga401ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mnrga401ApplicationJson = Mnrga401ApplicationJson;
var Mnrga404ApplicationJsonErrorEnum;
(function (Mnrga404ApplicationJsonErrorEnum) {
    Mnrga404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mnrga404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mnrga404ApplicationJsonErrorEnum = exports.Mnrga404ApplicationJsonErrorEnum || (exports.Mnrga404ApplicationJsonErrorEnum = {}));
var Mnrga404ApplicationJsonErrorDescriptionEnum;
(function (Mnrga404ApplicationJsonErrorDescriptionEnum) {
    Mnrga404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mnrga404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mnrga404ApplicationJsonErrorDescriptionEnum = exports.Mnrga404ApplicationJsonErrorDescriptionEnum || (exports.Mnrga404ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga404ApplicationJson, _super);
    function Mnrga404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga404ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mnrga404ApplicationJson = Mnrga404ApplicationJson;
var Mnrga500ApplicationJsonErrorEnum;
(function (Mnrga500ApplicationJsonErrorEnum) {
    Mnrga500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mnrga500ApplicationJsonErrorEnum = exports.Mnrga500ApplicationJsonErrorEnum || (exports.Mnrga500ApplicationJsonErrorEnum = {}));
var Mnrga500ApplicationJsonErrorDescriptionEnum;
(function (Mnrga500ApplicationJsonErrorDescriptionEnum) {
    Mnrga500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mnrga500ApplicationJsonErrorDescriptionEnum = exports.Mnrga500ApplicationJsonErrorDescriptionEnum || (exports.Mnrga500ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga500ApplicationJson, _super);
    function Mnrga500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga500ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mnrga500ApplicationJson = Mnrga500ApplicationJson;
var Mnrga502ApplicationJsonErrorEnum;
(function (Mnrga502ApplicationJsonErrorEnum) {
    Mnrga502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mnrga502ApplicationJsonErrorEnum = exports.Mnrga502ApplicationJsonErrorEnum || (exports.Mnrga502ApplicationJsonErrorEnum = {}));
var Mnrga502ApplicationJsonErrorDescriptionEnum;
(function (Mnrga502ApplicationJsonErrorDescriptionEnum) {
    Mnrga502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mnrga502ApplicationJsonErrorDescriptionEnum = exports.Mnrga502ApplicationJsonErrorDescriptionEnum || (exports.Mnrga502ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga502ApplicationJson, _super);
    function Mnrga502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga502ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mnrga502ApplicationJson = Mnrga502ApplicationJson;
var Mnrga503ApplicationJsonErrorEnum;
(function (Mnrga503ApplicationJsonErrorEnum) {
    Mnrga503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mnrga503ApplicationJsonErrorEnum = exports.Mnrga503ApplicationJsonErrorEnum || (exports.Mnrga503ApplicationJsonErrorEnum = {}));
var Mnrga503ApplicationJsonErrorDescriptionEnum;
(function (Mnrga503ApplicationJsonErrorDescriptionEnum) {
    Mnrga503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mnrga503ApplicationJsonErrorDescriptionEnum = exports.Mnrga503ApplicationJsonErrorDescriptionEnum || (exports.Mnrga503ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga503ApplicationJson, _super);
    function Mnrga503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga503ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mnrga503ApplicationJson = Mnrga503ApplicationJson;
var Mnrga504ApplicationJsonErrorEnum;
(function (Mnrga504ApplicationJsonErrorEnum) {
    Mnrga504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mnrga504ApplicationJsonErrorEnum = exports.Mnrga504ApplicationJsonErrorEnum || (exports.Mnrga504ApplicationJsonErrorEnum = {}));
var Mnrga504ApplicationJsonErrorDescriptionEnum;
(function (Mnrga504ApplicationJsonErrorDescriptionEnum) {
    Mnrga504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mnrga504ApplicationJsonErrorDescriptionEnum = exports.Mnrga504ApplicationJsonErrorDescriptionEnum || (exports.Mnrga504ApplicationJsonErrorDescriptionEnum = {}));
var Mnrga504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mnrga504ApplicationJson, _super);
    function Mnrga504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mnrga504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mnrga504ApplicationJson.prototype, "errorDescription", void 0);
    return Mnrga504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mnrga504ApplicationJson = Mnrga504ApplicationJson;
var MnrgaRequest = /** @class */ (function (_super) {
    __extends(MnrgaRequest, _super);
    function MnrgaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MnrgaRequestBody)
    ], MnrgaRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MnrgaSecurity)
    ], MnrgaRequest.prototype, "security", void 0);
    return MnrgaRequest;
}(utils_1.SpeakeasyBase));
exports.MnrgaRequest = MnrgaRequest;
var MnrgaResponse = /** @class */ (function (_super) {
    __extends(MnrgaResponse, _super);
    function MnrgaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MnrgaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MnrgaResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mnrga400ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mnrga401ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mnrga404ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mnrga500ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mnrga502ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mnrga503ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mnrga504ApplicationJson)
    ], MnrgaResponse.prototype, "mnrga504ApplicationJSONObject", void 0);
    return MnrgaResponse;
}(utils_1.SpeakeasyBase));
exports.MnrgaResponse = MnrgaResponse;
