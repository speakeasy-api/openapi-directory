import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogTypeEnum } from "./catalogtypeenum";
import { RegistrationOutput } from "./registrationoutput";
/**
 * Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.
 */
export declare class MetadataCatalogDetail extends SpeakeasyBase {
    catalogType?: CatalogTypeEnum;
    partitionRegistrationOutput?: RegistrationOutput;
    tableName?: string;
    tableRegistrationOutput?: RegistrationOutput;
}
