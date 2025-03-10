// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CompareFacesResponse - Success
type CompareFacesResponse struct {
	FaceMatches                      []CompareFacesMatch        `json:"FaceMatches,omitempty"`
	SourceImageFace                  *ComparedSourceImageFace   `json:"SourceImageFace,omitempty"`
	SourceImageOrientationCorrection *OrientationCorrectionEnum `json:"SourceImageOrientationCorrection,omitempty"`
	TargetImageOrientationCorrection *OrientationCorrectionEnum `json:"TargetImageOrientationCorrection,omitempty"`
	UnmatchedFaces                   []ComparedFace             `json:"UnmatchedFaces,omitempty"`
}
