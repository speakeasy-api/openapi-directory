import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionEnumEnum } from "./compressionenumenum";
import { EncryptionAlgEnum } from "./encryptionalgenum";
import { MdnResponseEnum } from "./mdnresponseenum";
import { MdnSigningAlgEnum } from "./mdnsigningalgenum";
import { SigningAlgEnum } from "./signingalgenum";
/**
 * Contains the details for a connector object. The connector object is used for AS2 outbound processes, to connect the Transfer Family customer with the trading partner.
 */
export declare class As2ConnectorConfig extends SpeakeasyBase {
    compression?: CompressionEnumEnum;
    encryptionAlgorithm?: EncryptionAlgEnum;
    localProfileId?: string;
    mdnResponse?: MdnResponseEnum;
    mdnSigningAlgorithm?: MdnSigningAlgEnum;
    messageSubject?: string;
    partnerProfileId?: string;
    signingAlgorithm?: SigningAlgEnum;
}
