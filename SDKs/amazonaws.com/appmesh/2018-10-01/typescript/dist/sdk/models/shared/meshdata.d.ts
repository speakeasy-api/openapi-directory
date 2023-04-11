import { SpeakeasyBase } from "../../../internal/utils";
import { MeshStatus } from "./meshstatus";
import { ResourceMetadata } from "./resourcemetadata";
/**
 * An object representing a service mesh returned by a describe operation.
 */
export declare class MeshData extends SpeakeasyBase {
    meshName: string;
    metadata: ResourceMetadata;
    status?: MeshStatus;
}
