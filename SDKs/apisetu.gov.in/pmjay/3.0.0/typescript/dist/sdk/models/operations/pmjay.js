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
exports.PmjayResponse = exports.PmjayRequest = exports.Pmjay504ApplicationJson = exports.Pmjay504ApplicationJsonErrorDescriptionEnum = exports.Pmjay504ApplicationJsonErrorEnum = exports.Pmjay503ApplicationJson = exports.Pmjay503ApplicationJsonErrorDescriptionEnum = exports.Pmjay503ApplicationJsonErrorEnum = exports.Pmjay502ApplicationJson = exports.Pmjay502ApplicationJsonErrorDescriptionEnum = exports.Pmjay502ApplicationJsonErrorEnum = exports.Pmjay500ApplicationJson = exports.Pmjay500ApplicationJsonErrorDescriptionEnum = exports.Pmjay500ApplicationJsonErrorEnum = exports.Pmjay404ApplicationJson = exports.Pmjay404ApplicationJsonErrorDescriptionEnum = exports.Pmjay404ApplicationJsonErrorEnum = exports.Pmjay401ApplicationJson = exports.Pmjay401ApplicationJsonErrorDescriptionEnum = exports.Pmjay401ApplicationJsonErrorEnum = exports.Pmjay400ApplicationJson = exports.Pmjay400ApplicationJsonErrorDescriptionEnum = exports.Pmjay400ApplicationJsonErrorEnum = exports.PmjaySecurity = exports.PmjayRequestBody = exports.PmjayRequestBodyFormatEnum = exports.PmjayRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PmjayRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PmjayRequestBodyCertificateParameters, _super);
    function PmjayRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], PmjayRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PmjayRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], PmjayRequestBodyCertificateParameters.prototype, "udf1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF2" }),
        __metadata("design:type", String)
    ], PmjayRequestBodyCertificateParameters.prototype, "udf2", void 0);
    return PmjayRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PmjayRequestBodyCertificateParameters = PmjayRequestBodyCertificateParameters;
var PmjayRequestBodyFormatEnum;
(function (PmjayRequestBodyFormatEnum) {
    PmjayRequestBodyFormatEnum["Pdf"] = "pdf";
})(PmjayRequestBodyFormatEnum = exports.PmjayRequestBodyFormatEnum || (exports.PmjayRequestBodyFormatEnum = {}));
var PmjayRequestBody = /** @class */ (function (_super) {
    __extends(PmjayRequestBody, _super);
    function PmjayRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PmjayRequestBodyCertificateParameters)
    ], PmjayRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PmjayRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PmjayRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PmjayRequestBody.prototype, "txnId", void 0);
    return PmjayRequestBody;
}(utils_1.SpeakeasyBase));
exports.PmjayRequestBody = PmjayRequestBody;
var PmjaySecurity = /** @class */ (function (_super) {
    __extends(PmjaySecurity, _super);
    function PmjaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PmjaySecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PmjaySecurity.prototype, "clientId", void 0);
    return PmjaySecurity;
}(utils_1.SpeakeasyBase));
exports.PmjaySecurity = PmjaySecurity;
var Pmjay400ApplicationJsonErrorEnum;
(function (Pmjay400ApplicationJsonErrorEnum) {
    Pmjay400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pmjay400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pmjay400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pmjay400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pmjay400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pmjay400ApplicationJsonErrorEnum = exports.Pmjay400ApplicationJsonErrorEnum || (exports.Pmjay400ApplicationJsonErrorEnum = {}));
var Pmjay400ApplicationJsonErrorDescriptionEnum;
(function (Pmjay400ApplicationJsonErrorDescriptionEnum) {
    Pmjay400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pmjay400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pmjay400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pmjay400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pmjay400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pmjay400ApplicationJsonErrorDescriptionEnum = exports.Pmjay400ApplicationJsonErrorDescriptionEnum || (exports.Pmjay400ApplicationJsonErrorDescriptionEnum = {}));
var Pmjay400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pmjay400ApplicationJson, _super);
    function Pmjay400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pmjay400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pmjay400ApplicationJson.prototype, "errorDescription", void 0);
    return Pmjay400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pmjay400ApplicationJson = Pmjay400ApplicationJson;
var Pmjay401ApplicationJsonErrorEnum;
(function (Pmjay401ApplicationJsonErrorEnum) {
    Pmjay401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pmjay401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pmjay401ApplicationJsonErrorEnum = exports.Pmjay401ApplicationJsonErrorEnum || (exports.Pmjay401ApplicationJsonErrorEnum = {}));
var Pmjay401ApplicationJsonErrorDescriptionEnum;
(function (Pmjay401ApplicationJsonErrorDescriptionEnum) {
    Pmjay401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pmjay401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pmjay401ApplicationJsonErrorDescriptionEnum = exports.Pmjay401ApplicationJsonErrorDescriptionEnum || (exports.Pmjay401ApplicationJsonErrorDescriptionEnum = {}));
var Pmjay401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pmjay401ApplicationJson, _super);
    function Pmjay401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pmjay401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pmjay401ApplicationJson.prototype, "errorDescription", void 0);
    return Pmjay401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pmjay401ApplicationJson = Pmjay401ApplicationJson;
var Pmjay404ApplicationJsonErrorEnum;
(function (Pmjay404ApplicationJsonErrorEnum) {
    Pmjay404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pmjay404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pmjay404ApplicationJsonErrorEnum = exports.Pmjay404ApplicationJsonErrorEnum || (exports.Pmjay404ApplicationJsonErrorEnum = {}));
var Pmjay404ApplicationJsonErrorDescriptionEnum;
(function (Pmjay404ApplicationJsonErrorDescriptionEnum) {
    Pmjay404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pmjay404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pmjay404ApplicationJsonErrorDescriptionEnum = exports.Pmjay404ApplicationJsonErrorDescriptionEnum || (exports.Pmjay404ApplicationJsonErrorDescriptionEnum = {}));
var Pmjay404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pmjay404ApplicationJson, _super);
    function Pmjay404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pmjay404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pmjay404ApplicationJson.prototype, "errorDescription", void 0);
    return Pmjay404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pmjay404ApplicationJson = Pmjay404ApplicationJson;
var Pmjay500ApplicationJsonErrorEnum;
(function (Pmjay500ApplicationJsonErrorEnum) {
    Pmjay500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pmjay500ApplicationJsonErrorEnum = exports.Pmjay500ApplicationJsonErrorEnum || (exports.Pmjay500ApplicationJsonErrorEnum = {}));
var Pmjay500ApplicationJsonErrorDescriptionEnum;
(function (Pmjay500ApplicationJsonErrorDescriptionEnum) {
    Pmjay500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pmjay500ApplicationJsonErrorDescriptionEnum = exports.Pmjay500ApplicationJsonErrorDescriptionEnum || (exports.Pmjay500ApplicationJsonErrorDescriptionEnum = {}));
var Pmjay500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pmjay500ApplicationJson, _super);
    function Pmjay500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pmjay500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pmjay500ApplicationJson.prototype, "errorDescription", void 0);
    return Pmjay500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pmjay500ApplicationJson = Pmjay500ApplicationJson;
var Pmjay502ApplicationJsonErrorEnum;
(function (Pmjay502ApplicationJsonErrorEnum) {
    Pmjay502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pmjay502ApplicationJsonErrorEnum = exports.Pmjay502ApplicationJsonErrorEnum || (exports.Pmjay502ApplicationJsonErrorEnum = {}));
var Pmjay502ApplicationJsonErrorDescriptionEnum;
(function (Pmjay502ApplicationJsonErrorDescriptionEnum) {
    Pmjay502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pmjay502ApplicationJsonErrorDescriptionEnum = exports.Pmjay502ApplicationJsonErrorDescriptionEnum || (exports.Pmjay502ApplicationJsonErrorDescriptionEnum = {}));
var Pmjay502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pmjay502ApplicationJson, _super);
    function Pmjay502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pmjay502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pmjay502ApplicationJson.prototype, "errorDescription", void 0);
    return Pmjay502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pmjay502ApplicationJson = Pmjay502ApplicationJson;
var Pmjay503ApplicationJsonErrorEnum;
(function (Pmjay503ApplicationJsonErrorEnum) {
    Pmjay503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pmjay503ApplicationJsonErrorEnum = exports.Pmjay503ApplicationJsonErrorEnum || (exports.Pmjay503ApplicationJsonErrorEnum = {}));
var Pmjay503ApplicationJsonErrorDescriptionEnum;
(function (Pmjay503ApplicationJsonErrorDescriptionEnum) {
    Pmjay503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pmjay503ApplicationJsonErrorDescriptionEnum = exports.Pmjay503ApplicationJsonErrorDescriptionEnum || (exports.Pmjay503ApplicationJsonErrorDescriptionEnum = {}));
var Pmjay503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pmjay503ApplicationJson, _super);
    function Pmjay503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pmjay503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pmjay503ApplicationJson.prototype, "errorDescription", void 0);
    return Pmjay503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pmjay503ApplicationJson = Pmjay503ApplicationJson;
var Pmjay504ApplicationJsonErrorEnum;
(function (Pmjay504ApplicationJsonErrorEnum) {
    Pmjay504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pmjay504ApplicationJsonErrorEnum = exports.Pmjay504ApplicationJsonErrorEnum || (exports.Pmjay504ApplicationJsonErrorEnum = {}));
var Pmjay504ApplicationJsonErrorDescriptionEnum;
(function (Pmjay504ApplicationJsonErrorDescriptionEnum) {
    Pmjay504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pmjay504ApplicationJsonErrorDescriptionEnum = exports.Pmjay504ApplicationJsonErrorDescriptionEnum || (exports.Pmjay504ApplicationJsonErrorDescriptionEnum = {}));
var Pmjay504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pmjay504ApplicationJson, _super);
    function Pmjay504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pmjay504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pmjay504ApplicationJson.prototype, "errorDescription", void 0);
    return Pmjay504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pmjay504ApplicationJson = Pmjay504ApplicationJson;
var PmjayRequest = /** @class */ (function (_super) {
    __extends(PmjayRequest, _super);
    function PmjayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PmjayRequestBody)
    ], PmjayRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PmjaySecurity)
    ], PmjayRequest.prototype, "security", void 0);
    return PmjayRequest;
}(utils_1.SpeakeasyBase));
exports.PmjayRequest = PmjayRequest;
var PmjayResponse = /** @class */ (function (_super) {
    __extends(PmjayResponse, _super);
    function PmjayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PmjayResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PmjayResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pmjay400ApplicationJson)
    ], PmjayResponse.prototype, "pmjay400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pmjay401ApplicationJson)
    ], PmjayResponse.prototype, "pmjay401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pmjay404ApplicationJson)
    ], PmjayResponse.prototype, "pmjay404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pmjay500ApplicationJson)
    ], PmjayResponse.prototype, "pmjay500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pmjay502ApplicationJson)
    ], PmjayResponse.prototype, "pmjay502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pmjay503ApplicationJson)
    ], PmjayResponse.prototype, "pmjay503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pmjay504ApplicationJson)
    ], PmjayResponse.prototype, "pmjay504ApplicationJSONObject", void 0);
    return PmjayResponse;
}(utils_1.SpeakeasyBase));
exports.PmjayResponse = PmjayResponse;
