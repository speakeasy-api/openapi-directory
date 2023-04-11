import { SpeakeasyBase } from "../../../internal/utils";
import { BackendJobRespObj } from "./backendjobrespobj";
/**
 * Success
 */
export declare class ListBackendJobsResponse extends SpeakeasyBase {
    jobs?: BackendJobRespObj[];
    nextToken?: string;
}
