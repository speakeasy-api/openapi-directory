import { SpeakeasyBase } from "../../../internal/utils";
import { IndexEditionEnum } from "./indexeditionenum";
import { IndexStatusEnum } from "./indexstatusenum";
/**
 * Summary information on the configuration of an index.
 */
export declare class IndexConfigurationSummary extends SpeakeasyBase {
    createdAt: Date;
    edition?: IndexEditionEnum;
    id?: string;
    name?: string;
    status: IndexStatusEnum;
    updatedAt: Date;
}
