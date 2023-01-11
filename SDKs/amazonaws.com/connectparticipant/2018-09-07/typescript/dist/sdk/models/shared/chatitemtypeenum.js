"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatItemTypeEnum = void 0;
var ChatItemTypeEnum;
(function (ChatItemTypeEnum) {
    ChatItemTypeEnum["Typing"] = "TYPING";
    ChatItemTypeEnum["ParticipantJoined"] = "PARTICIPANT_JOINED";
    ChatItemTypeEnum["ParticipantLeft"] = "PARTICIPANT_LEFT";
    ChatItemTypeEnum["ChatEnded"] = "CHAT_ENDED";
    ChatItemTypeEnum["TransferSucceeded"] = "TRANSFER_SUCCEEDED";
    ChatItemTypeEnum["TransferFailed"] = "TRANSFER_FAILED";
    ChatItemTypeEnum["Message"] = "MESSAGE";
    ChatItemTypeEnum["Event"] = "EVENT";
    ChatItemTypeEnum["Attachment"] = "ATTACHMENT";
    ChatItemTypeEnum["ConnectionAck"] = "CONNECTION_ACK";
})(ChatItemTypeEnum = exports.ChatItemTypeEnum || (exports.ChatItemTypeEnum = {}));
