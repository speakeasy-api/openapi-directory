import { SpeakeasyBase } from "../../../internal/utils";
import { DataShareAssociation } from "./datashareassociation";
/**
 * Success
 */
export declare class DataShare extends SpeakeasyBase {
    allowPubliclyAccessibleConsumers?: boolean;
    dataShareArn?: string;
    dataShareAssociations?: DataShareAssociation[];
    managedBy?: string;
    producerArn?: string;
}
