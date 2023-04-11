import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Chunk upload response
 */
export declare class ChunkUploadResponse extends SpeakeasyBase {
    /**
     * Hash value of transferred chunk
     */
    hash?: string;
    /**
     * Chunk size
     */
    size: number;
}
