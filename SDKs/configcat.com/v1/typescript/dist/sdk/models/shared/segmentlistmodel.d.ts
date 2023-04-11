import { SpeakeasyBase } from "../../../internal/utils";
import { ProductModel } from "./productmodel";
export declare class SegmentListModel extends SpeakeasyBase {
    createdAt?: Date;
    creatorEmail?: string;
    creatorFullName?: string;
    description?: string;
    lastUpdaterEmail?: string;
    lastUpdaterFullName?: string;
    name?: string;
    product?: ProductModel;
    segmentId?: string;
    updatedAt?: Date;
    usage?: number;
}
