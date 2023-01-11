package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormFieldDefinition
 * Definition of a form field for OCR data extraction from images
**/
public class FormFieldDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowNumericDigits")
    public Boolean allowNumericDigits;
    public FormFieldDefinition withAllowNumericDigits(Boolean allowNumericDigits) {
        this.allowNumericDigits = allowNumericDigits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlternateAnchor")
    public String alternateAnchor;
    public FormFieldDefinition withAlternateAnchor(String alternateAnchor) {
        this.alternateAnchor = alternateAnchor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnchorMode")
    public String anchorMode;
    public FormFieldDefinition withAnchorMode(String anchorMode) {
        this.anchorMode = anchorMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BottomAnchor")
    public String bottomAnchor;
    public FormFieldDefinition withBottomAnchor(String bottomAnchor) {
        this.bottomAnchor = bottomAnchor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataType")
    public String dataType;
    public FormFieldDefinition withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldID")
    public String fieldID;
    public FormFieldDefinition withFieldId(String fieldID) {
        this.fieldID = fieldID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HorizontalAlignmentType")
    public String horizontalAlignmentType;
    public FormFieldDefinition withHorizontalAlignmentType(String horizontalAlignmentType) {
        this.horizontalAlignmentType = horizontalAlignmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ignore")
    public String[] ignore;
    public FormFieldDefinition withIgnore(String[] ignore) {
        this.ignore = ignore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeftAnchor")
    public String leftAnchor;
    public FormFieldDefinition withLeftAnchor(String leftAnchor) {
        this.leftAnchor = leftAnchor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumCharacterCount")
    public Integer minimumCharacterCount;
    public FormFieldDefinition withMinimumCharacterCount(Integer minimumCharacterCount) {
        this.minimumCharacterCount = minimumCharacterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public String options;
    public FormFieldDefinition withOptions(String options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetDigitCount")
    public Integer targetDigitCount;
    public FormFieldDefinition withTargetDigitCount(Integer targetDigitCount) {
        this.targetDigitCount = targetDigitCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetFieldHeight_Relative")
    public Double targetFieldHeightRelative;
    public FormFieldDefinition withTargetFieldHeightRelative(Double targetFieldHeightRelative) {
        this.targetFieldHeightRelative = targetFieldHeightRelative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetFieldHorizontalAdjustment")
    public Double targetFieldHorizontalAdjustment;
    public FormFieldDefinition withTargetFieldHorizontalAdjustment(Double targetFieldHorizontalAdjustment) {
        this.targetFieldHorizontalAdjustment = targetFieldHorizontalAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetFieldVerticalAdjustment")
    public Double targetFieldVerticalAdjustment;
    public FormFieldDefinition withTargetFieldVerticalAdjustment(Double targetFieldVerticalAdjustment) {
        this.targetFieldVerticalAdjustment = targetFieldVerticalAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetFieldWidth_Relative")
    public Double targetFieldWidthRelative;
    public FormFieldDefinition withTargetFieldWidthRelative(Double targetFieldWidthRelative) {
        this.targetFieldWidthRelative = targetFieldWidthRelative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopAnchor")
    public String topAnchor;
    public FormFieldDefinition withTopAnchor(String topAnchor) {
        this.topAnchor = topAnchor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerticalAlignmentType")
    public String verticalAlignmentType;
    public FormFieldDefinition withVerticalAlignmentType(String verticalAlignmentType) {
        this.verticalAlignmentType = verticalAlignmentType;
        return this;
    }
}