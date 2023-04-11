import { SpeakeasyBase } from "../../../internal/utils";
export declare class Layer extends SpeakeasyBase {
    /**
     * image layer digest
     */
    digest?: string;
    /**
     * Dockerfile instruction
     */
    instruction?: string;
    /**
     * size of the layer
     */
    size?: number;
}
