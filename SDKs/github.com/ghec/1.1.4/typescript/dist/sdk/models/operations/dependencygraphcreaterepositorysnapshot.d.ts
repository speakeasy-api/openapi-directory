import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DependencyGraphCreateRepositorySnapshotRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    snapshot: shared.Snapshot;
}
/**
 * Response
 */
export declare class DependencyGraphCreateRepositorySnapshot201ApplicationJSON extends SpeakeasyBase {
    /**
     * The time at which the snapshot was created.
     */
    createdAt: string;
    /**
     * ID of the created snapshot.
     */
    id: number;
    /**
     * A message providing further details about the result, such as why the dependencies were not updated.
     */
    message: string;
    /**
     * Either "SUCCESS", "ACCEPTED", or "INVALID". "SUCCESS" indicates that the snapshot was successfully created and the repository's dependencies were updated. "ACCEPTED" indicates that the snapshot was successfully created, but the repository's dependencies were not updated. "INVALID" indicates that the snapshot was malformed.
     */
    result: string;
}
export declare class DependencyGraphCreateRepositorySnapshotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    dependencyGraphCreateRepositorySnapshot201ApplicationJSONObject?: DependencyGraphCreateRepositorySnapshot201ApplicationJSON;
}
