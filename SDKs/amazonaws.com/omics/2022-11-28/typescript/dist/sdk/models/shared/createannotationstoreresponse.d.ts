import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceItem } from "./referenceitem";
import { StoreFormatEnum } from "./storeformatenum";
import { StoreOptions } from "./storeoptions";
import { StoreStatusEnum } from "./storestatusenum";
/**
 * Success
 */
export declare class CreateAnnotationStoreResponse extends SpeakeasyBase {
    creationTime: Date;
    id: string;
    name: string;
    reference?: ReferenceItem;
    status: StoreStatusEnum;
    storeFormat?: StoreFormatEnum;
    storeOptions?: StoreOptions;
}
