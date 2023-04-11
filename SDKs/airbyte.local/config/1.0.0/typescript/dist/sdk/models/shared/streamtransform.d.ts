import { SpeakeasyBase } from "../../../internal/utils";
import { FieldTransform } from "./fieldtransform";
import { StreamDescriptor } from "./streamdescriptor";
export declare enum StreamTransformTransformTypeEnum {
    AddStream = "add_stream",
    RemoveStream = "remove_stream",
    UpdateStream = "update_stream"
}
export declare class StreamTransform extends SpeakeasyBase {
    streamDescriptor: StreamDescriptor;
    transformType: StreamTransformTransformTypeEnum;
    /**
     * list of field transformations. order does not matter.
     */
    updateStream?: FieldTransform[];
}
