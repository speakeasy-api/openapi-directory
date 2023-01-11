import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrUpdateAnnotationPathParams extends SpeakeasyBase {
    annotationId: string;
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class CreateOrUpdateAnnotationRequest extends SpeakeasyBase {
    pathParams: CreateOrUpdateAnnotationPathParams;
    request: Record<string, any>;
}
export declare class CreateOrUpdateAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    reportAnnotation?: Record<string, any>;
}
