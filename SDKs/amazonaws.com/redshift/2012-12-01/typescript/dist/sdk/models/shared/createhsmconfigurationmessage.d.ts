import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateHsmConfigurationMessage extends SpeakeasyBase {
    description: string;
    hsmConfigurationIdentifier: string;
    hsmIpAddress: string;
    hsmPartitionName: string;
    hsmPartitionPassword: string;
    hsmServerPublicCertificate: string;
    tags?: TagList[];
}
