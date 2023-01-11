package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Section {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("course_description")
    public String courseDescription;
    public Section withCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("course_name")
    public String courseName;
    public Section withCourseName(String courseName) {
        this.courseName = courseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("course_number")
    public String courseNumber;
    public Section withCourseNumber(String courseNumber) {
        this.courseNumber = courseNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public Section withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public String district;
    public Section withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grade")
    public SectionGradeEnum grade;
    public Section withGrade(SectionGradeEnum grade) {
        this.grade = grade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Section withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_modified")
    public String lastModified;
    public Section withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Section withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public String period;
    public Section withPeriod(String period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public String school;
    public Section withSchool(String school) {
        this.school = school;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section_number")
    public String sectionNumber;
    public Section withSectionNumber(String sectionNumber) {
        this.sectionNumber = sectionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sis_id")
    public String sisId;
    public Section withSisId(String sisId) {
        this.sisId = sisId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("students")
    public String[] students;
    public Section withStudents(String[] students) {
        this.students = students;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public SectionSubjectEnum subject;
    public Section withSubject(SectionSubjectEnum subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teacher")
    public String teacher;
    public Section withTeacher(String teacher) {
        this.teacher = teacher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teachers")
    public String[] teachers;
    public Section withTeachers(String[] teachers) {
        this.teachers = teachers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public Term term;
    public Section withTerm(Term term) {
        this.term = term;
        return this;
    }
}